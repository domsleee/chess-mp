import { Injectable } from '@angular/core';
import { Color } from 'chessground/types';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { getDefaultEngineSettings, getDefaultNames, IEngineSettings, IPlayerTeam, PlayerTeamDict } from '../components/chess-board/helpers/PlayerTeamHelper';
import { getEngineName, getNewCPUId } from '../shared/engine/engine-helpers';
import { IInfo, IInfoOptionals, IMessage, MessageData } from '../shared/peer-to-peer/defs';
import { getDefaultSharedData, ISharedData, ISharedDataOptionals } from '../shared/peer-to-peer/shared-data';
import { merge } from '../shared/util/helpers';
import { invertColor } from '../shared/util/play';
import { GetCpuIdService } from './get-cpu-id.service';
import { PeerToPeerService } from './peer-to-peer.service';

const debug = console.log;

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

  constructor(private peerToPeerService: PeerToPeerService,
    private getCpuIdService: GetCpuIdService) {
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

  getNameObservable(color?: Color) {
    if (color == undefined) {
      return this.names.asObservable();
    }
    return this.nameByTeamObservable[color];
  }

  getColorNames(color: Color): PlayerTeamDict {
    return this.keyValueFilter(this.names.getValue(), color);
  }

  private keyValueFilter(names: PlayerTeamDict, teamName: Color): PlayerTeamDict {
    return Object.fromEntries(Object.entries(names).filter(([k, v]) => v.team == teamName));
  }

  private processMessage(message: IMessage) {
    if (message.data.command === 'CREATE_PLAYER') {
      const nameId = message.data.playerId;
      const currNames = this.names.getValue();
      if (nameId in currNames) {
        debug('warning! attempted to create player that exists');
        return;
      }
      debug(`creating player ${nameId}`);
      currNames[nameId] = message.data.player;
      this.names.next(currNames);
      this.newName.next(nameId);
      this.numNames.next(Object.keys(currNames).length);
    }
    else if (message.data.command === 'DELETE_PLAYER') {
      const currNames = this.names.getValue();
      const nameId = message.data.playerId;
      if (!(nameId in currNames)) {
        debug('warning! attempted to delete player that does not exist');
        return;
      }
      delete currNames[nameId];
      this.names.next(currNames);
      this.numNames.next(Object.keys(currNames).length);
    }
    else if (message.data.command === 'INFO2') {
      const nameId = message.data.overrides?.id ?? message.from;
      const currNames = this.names.getValue();

      if (!(nameId in currNames)) {
        debug('warning! attempted to modify player that does not exist');
        return;
      }
      debug(`updating ${nameId}`, message);
      const namesMerge = this.filterDict<Partial<IPlayerTeam>>(
        message.data.player, ([k, v]) => k !== 'engineSettings'
      );
      currNames[nameId] = {...currNames[nameId], ...namesMerge};
      if (message.data.player.engineSettings) {
        currNames[nameId].engineSettings = {
          ...currNames[nameId].engineSettings,
          ...message.data.player.engineSettings
        };
      }
      this.names.next(currNames);
    }
    else if (message.data.command === 'INFO') {
      let currNames = this.names.getValue();
      debug("NEW MSG RECEIVED", message);
      const nameId = message.data.idOverride ?? message.from;

      const isNewName = !(nameId in currNames);
      currNames[nameId] = {
        ...currNames[nameId],
        ...this.filterDict<IInfo>(message.data, ([k, v]) => k !== 'engineSettings' && k !== 'idOverride'),
      };
      if (message.data.engineSettings) {
        const currEngineSettings = currNames[nameId].engineSettings ?? {};
        currNames[nameId].engineSettings = {...currEngineSettings, ...message.data.engineSettings};
        const engineSettings = currNames[nameId].engineSettings;
        if (engineSettings) {
          currNames[nameId].name = getEngineName(engineSettings);
        }
      }

      this.names.next(currNames);
      debug("new names", currNames);
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
    }, {echo: true});
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
    return this.broadcastNamesMessage2({team});
  }

  setSortNumber(playerId: string, sortNumber: number) {
    return this.broadcastNamesMessage2({sortNumber}, {id: playerId});
  }

  addCPU(team: Color) {
    return this.createPlayer({
      name: getEngineName(getDefaultEngineSettings()),
      team,
      owner: this.peerToPeerService.getId(),
      engineSettings: getDefaultEngineSettings(),
      sortNumber: 0
    }, this.getCpuIdService.getNewCpuId());
  }

  createPlayer(player: IPlayerTeam, playerId: string) {
    return this.peerToPeerService.broadcastAndToSelf({
      command: 'CREATE_PLAYER',
      player,
      playerId
    });
  }

  setIsReady(isReady: boolean) {
    return this.broadcastNamesMessage2({isReady});
  }

  setEngineSettings(playerId: string, engineSettings: IEngineSettings, team: Color | null = null) {
    const player: Partial<IPlayerTeam> = {
      name: getEngineName({...this.getPlayerSync(playerId).engineSettings, ...engineSettings}),
      sortNumber: 0,
      engineSettings
    };
    if (team != null) {
      player.team = team;
    }

    return this.broadcastNamesMessage2(
      player,
      {id: playerId}
    );
  }

  setRematchRequested(rematchRequested: boolean) {
    this.broadcastNamesMessage2({rematchRequested});
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

  private broadcastNamesMessage2(data: Partial<IPlayerTeam>, overrides?: {id: string}) {
    const message: MessageData = {
      command: 'INFO2',
      player: data,
      overrides
    };
    this.peerToPeerService.broadcastAndToSelf(message, {echo: true});
  }

}
