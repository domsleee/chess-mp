import { Injectable } from '@angular/core';
import { Color } from 'chessground/types';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { getDefaultEngineSettings, getDefaultNames, IEngineSettings, IPlayerTeam, PlayerTeamDict } from '../components/chess-board/helpers/PlayerTeamHelper';
import { IInfo, IInfoOptionals, IMessage, MessageData } from '../shared/peer-to-peer/defs';
import { getDefaultSharedData, ISharedData, ISharedDataOptionals } from '../shared/peer-to-peer/shared-data';
import { merge } from '../shared/util/helpers';
import { invertColor } from '../shared/util/play';
import { PeerToPeerService } from './peer-to-peer.service';
@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  messageSubscription: Subscription;
  names: BehaviorSubject<PlayerTeamDict> = new BehaviorSubject({});
  numNames = new BehaviorSubject<number>(0);
  newName: Subject<string> = new Subject();
  sharedData: BehaviorSubject<ISharedData> = new BehaviorSubject(getDefaultSharedData());

  private nameByTeamObservable: {
    white: Observable<PlayerTeamDict>,
    black: Observable<PlayerTeamDict>
  };

  constructor(private peerToPeerService: PeerToPeerService) {
    this.messageSubscription = this.peerToPeerService.messageSubject.subscribe(this.processMessage.bind(this));
    this.nameByTeamObservable = {
      white: this.names.pipe(map(t => this.keyValueFilter(t, "white"))),
      black: this.names.pipe(map(t => this.keyValueFilter(t, "black")))
    }

    if (!this.peerToPeerService.isConnected) {
      this.names.next(getDefaultNames());
    }
  }

  ngOnDestroy() {
    this.messageSubscription.unsubscribe();
  }

  getNameObservable(color: Color) {
    return this.nameByTeamObservable[color];
  }

  getColorNames(color: Color): PlayerTeamDict {
    return this.keyValueFilter(this.names.getValue(), color);
  }

  private keyValueFilter(names: PlayerTeamDict, teamName: Color): PlayerTeamDict {
    return Object.fromEntries(Object.entries(names).filter(([k, v]) => v.team == teamName));
  }


  private processMessage(message: IMessage) {
    if (message.data.command === 'INFO') {
      let currNames = this.names.getValue();
      console.log("new msg", message);
      const nameId = message.data.idOverride ?? message.from;

      const isNewName = !(nameId in currNames);
      currNames[nameId] = {
        ...currNames[nameId],
        ...this.filterDict<IInfo>(message.data, ([k,v]) => k != 'engineSettings' && k != 'idOverride'),
        isOwnedByMe: message.data.owner === this.peerToPeerService.getId()
      };
      if (message.data.engineSettings) {
        const currEngineSettings = currNames[nameId].engineSettings ?? {};
        currNames[nameId].engineSettings = {...currEngineSettings, ...message.data.engineSettings};
        const engineSettings = currNames[nameId]!.engineSettings;
        if (engineSettings) {
          currNames[nameId].name = this.getEngineName(engineSettings);
        }
      }

      this.names.next(currNames);
      console.log("new names", currNames);
      if (isNewName) {
        this.newName.next(nameId);
        this.numNames.next(Object.keys(currNames).length);
      }
    }
    else if (message.data.command === 'DISCONNECTED') {
      const currNames = this.names.getValue();
      let newNames: PlayerTeamDict = {};
      for (const key in currNames) {
        if (currNames[key].owner !== message.data.name) {
          newNames[key] = currNames[key];
        }
      }

      this.names.next(newNames);
      console.log("NEXT NAMES after dc...", newNames);
    }
    else if (message.data.command === 'SET_NAMES') {
      const currNames = this.names.getValue();
      const newNames = {...currNames, ...message.data.names}
      this.names.next(newNames);
      this.sharedData.next(message.data.sharedData);
    }
    else if (message.data.command === 'UPDATE_SHARED') {
      this.sharedData.next(merge(this.sharedData.getValue(), message.data.sharedData));
    }
  }

  setSharedData(sharedData: ISharedData | ISharedDataOptionals) {
    this.peerToPeerService.broadcastAndToSelf({
      command: 'UPDATE_SHARED',
      sharedData: sharedData
    });
  }

  filterDict<T>(dict: T, fn: (entry: [string, any]) => boolean) {
    return Object.fromEntries(Object.entries(dict).filter(fn));
  }

  getPlayer(playerId: string): Observable<IPlayerTeam> {
    return this.names.pipe(map(t => t[playerId]));
  }

  getPlayerSync(playerId: string): IPlayerTeam {
    return this.names.getValue()[playerId];
  }

  setTeam(team: Color) {
    return this.broadcastNamesMessage({team: team});
  }

  addCPU(team: Color) {
    return this.setEngineSettings(this.getNewCPUId(), getDefaultEngineSettings(), team);
  }

  setIsReady(isReady: boolean) {
    return this.broadcastNamesMessage({
      isReady: isReady,
    });
  }

  setEngineSettings(playerId: string, engineSettings: IEngineSettings, team: Color | null = null) {
    const infoOptionals: IInfoOptionals = {
      idOverride: playerId,
      engineSettings: engineSettings
    }
    if (team != null) {
      infoOptionals.team = team;
    }
   
    return this.broadcastNamesMessage(
      infoOptionals,
      this.getEngineName({...this.getPlayerSync(playerId)?.engineSettings ?? {}, ...engineSettings})
    );
  }

  setRematchRequested(rematchRequested: boolean) {
    this.broadcastNamesMessage({rematchRequested});
  }

  swapAllTeamsAndRematch() {
    const names = this.names.getValue();
    for (const key of Object.keys(names)) {
      names[key].team = invertColor(names[key].team);
      names[key].rematchRequested = undefined;
    }
    this.setSharedData({matchCount: this.sharedData.getValue().matchCount + 1});
    this.names.next(names);
  }

  private getEngineName(engineSettings: IEngineSettings) {
    return `Stockfish (${engineSettings.elo}, ${(engineSettings.timeForMove ?? 0) / 1000}s)`;
  }

  private getNewCPUId() {
    const keys = Object.keys(this.names.getValue());
    console.log(keys);
    let id = this.peerToPeerService.getId();
    let ct = 0;
    while (keys.includes(id)) {
      id = `${this.peerToPeerService.getId()}_sf${ct}`;
      ct++;
    }
    return id;
  }

  private broadcastNamesMessage(data: IInfoOptionals, nameOverride: string | null = null) {
    let message: MessageData = {
      command: 'INFO',
      name: this.peerToPeerService.getAlias(),
      owner: this.peerToPeerService.getId(),
      ...data
    };
    if (nameOverride != null) {
      message = {...message, name: nameOverride};
    }

    this.peerToPeerService.broadcastAndToSelf(message);
  }
}
