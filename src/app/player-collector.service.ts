import { Injectable } from '@angular/core';
import { Color } from 'chessground/types';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { createPlayerTeam, getDefaultEngineSettings, getDefaultNames, IEngineSettings, IPlayerTeam, PlayerTeamDict } from './chess-board/helpers/PlayerTeamHelper';
import { DEFAULT_ID, PeerToPeerService } from './peer-to-peer.service';
import { IInfo, IMessage } from './peer-to-peer/defs';

@Injectable({
  providedIn: 'root'
})
export class PlayerCollectorService {
  messageSubscription: Subscription;
  names: BehaviorSubject<PlayerTeamDict> = new BehaviorSubject({});
  newName: Subject<string> = new Subject();
  whiteNames: Observable<PlayerTeamDict>;
  blackNames: Observable<PlayerTeamDict>;

  constructor(private peerToPeerService: PeerToPeerService) {
    this.messageSubscription = this.peerToPeerService.messageSubject.subscribe(this.processMessage.bind(this));
    this.whiteNames = this.names.pipe(map(t => this.keyValueFilter(t, "white")));
    this.blackNames = this.names.pipe(map(t => this.keyValueFilter(t, "black")));

    if (!this.peerToPeerService.isConnected) {
      this.names.next(getDefaultNames())
    }
  }

  getColorNames(color: Color): PlayerTeamDict {
    return this.keyValueFilter(this.names.getValue(), color);
  }

  private keyValueFilter(names: PlayerTeamDict, teamName: Color): PlayerTeamDict {
    return Object.fromEntries(Object.entries(names).filter(([k, v]) => v.team == teamName));
  }

  ngOnDestroy() {
    this.messageSubscription.unsubscribe();
  }

  private processMessage(message: IMessage) {
    if (message.data.command === 'INFO') {
      let currNames = this.names.getValue();
      console.log("new msg", message);
      const nameId = message.data.idOverride ?? message.from;

      const isNewName = !(nameId in currNames);
      const existingValue: IPlayerTeam | null = currNames[nameId];

      currNames[nameId] = {
        name: message.data.name,
        owner: message.data.owner,
        isOwnedByMe: message.data.owner === this.peerToPeerService.getId(),
        team: message.data.team ?? existingValue?.team ?? 'white',
        isReady: message.data.isReady ?? existingValue?.isReady ?? false,
      };
      if (message.data.engineSettings) {
        currNames[nameId].engineSettings = currNames[nameId].engineSettings ?? {};
        currNames[nameId].engineSettings!.elo = message.data.engineSettings.elo ?? currNames[nameId].engineSettings?.elo;
        currNames[nameId].engineSettings!.timeForMove = message.data.engineSettings.timeForMove ?? currNames[nameId].engineSettings?.timeForMove;
      }

      this.names.next(currNames);
      console.log("new names", currNames);
      if (isNewName) this.newName.next(nameId);
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
    }
    else if (message.data.command === 'SET_NAMES') {
      const currNames = this.names.getValue();
      const newNames = {...currNames, ...message.data.names}
      this.names.next(newNames);
    }
  }

  getPlayer(playerId: string): Observable<IPlayerTeam> {
    return this.names.pipe(map(t => t[playerId]));
  }

  getPlayerSync(playerId: string): IPlayerTeam {
    return this.names.getValue()[playerId];
  }

  setTeam(team: Color) {
    this.peerToPeerService.broadcastAndToSelf({
      command: 'INFO',
      name: this.peerToPeerService.getAlias(),
      team: team,
      owner: this.peerToPeerService.getId()
    });
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

  addCPU(team: Color) {
    console.log("ADDNEWCPU");
    this.peerToPeerService.broadcastAndToSelf({
      command: 'INFO',
      team: team,
      idOverride: this.getNewCPUId(),
      name: 'stockfish',
      owner: this.peerToPeerService.getId(),
      engineSettings: getDefaultEngineSettings()
    })
  }

  setIsReady(isReady: boolean) {
    this.peerToPeerService.broadcastAndToSelf({
      command: 'INFO',
      name: this.peerToPeerService.getAlias(),
      owner: this.peerToPeerService.getId(),
      isReady
    });
  }

  setEngineSettings(playerId: string, engineSettings: IEngineSettings) {
    this.peerToPeerService.broadcastAndToSelf({
      command: 'INFO',
      idOverride: playerId,
      name: this.getPlayerSync(playerId).name,
      owner: this.peerToPeerService.getId(),
      engineSettings: engineSettings
    });
  }
}
