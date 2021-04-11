import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Color } from 'chessground/types';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { getDefaultEngineSettings, getDefaultNames, IEngineSettings, IPlayerTeam, PlayerTeamDict } from '../components/chess-board/helpers/PlayerTeamHelper';
import { getEngineName, getNewCPUId } from '../shared/engine/engine-helpers';
import { IMessage, MessageData } from '../shared/peer-to-peer/defs';
import { getDefaultSharedData, ISharedData } from '../shared/peer-to-peer/shared-data';
import { invertColor } from '../shared/util/play';
import { GetCpuIdService } from './get-cpu-id.service';
import { PeerToPeerService } from './peer-to-peer.service';
import merge from 'lodash-es/merge';
import { PartialDeep } from 'type-fest';

const debug = console.log;

@Injectable({
  providedIn: 'root'
})
export class SharedDataService implements OnDestroy {
  messageSubscription: Subscription;
  names: BehaviorSubject<PlayerTeamDict> = new BehaviorSubject({});
  numNames = new BehaviorSubject<number>(0);
  newName: Subject<string> = new Subject();
  sharedData: BehaviorSubject<ISharedData> = new BehaviorSubject(getDefaultSharedData());

  private nameByTeamObservable: {
    white: Observable<PlayerTeamDict>,
    black: Observable<PlayerTeamDict>
  };

  constructor(
    private peerToPeerService: PeerToPeerService,
    private getCpuIdService: GetCpuIdService
  ) {
    this.messageSubscription = this.peerToPeerService.messageSubject.subscribe(this.processMessage.bind(this));
    this.nameByTeamObservable = {
      white: this.names.pipe(map(t => this.keyValueFilter(t, "white"))),
      black: this.names.pipe(map(t => this.keyValueFilter(t, "black")))
    };

    if (!this.peerToPeerService.isConnected) {
      this.names.next(getDefaultNames());
    }
  }

  ngOnDestroy() {
    this.messageSubscription.unsubscribe();
  }

  getNameObservable(color?: Color) {
    if (color === undefined) {
      return this.names.asObservable();
    }
    return this.nameByTeamObservable[color];
  }

  getColorNames(color: Color): PlayerTeamDict {
    return this.keyValueFilter(this.names.getValue(), color);
  }

  private keyValueFilter(names: PlayerTeamDict, teamName: Color): PlayerTeamDict {
    return Object.fromEntries(Object.entries(names).filter(([k, v]) => v.team === teamName));
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
    else if (message.data.command === 'INFO') {
      const nameId = message.data.overrides?.id ?? message.from;
      const currNames = this.names.getValue();

      if (!(nameId in currNames)) {
        debug('warning! attempted to modify player that does not exist');
        return;
      }
      debug(`updating ${nameId}`, message);
      currNames[nameId] = merge(currNames[nameId], message.data.player);
      this.names.next(currNames);
    }
    else if (message.data.command === 'DISCONNECTED') {
      const currNames = this.names.getValue();
      const newNames: PlayerTeamDict = {};
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
      this.names.next(merge(currNames, message.data.names));
      this.sharedData.next(message.data.sharedData);
    }
    else if (message.data.command === 'UPDATE_SHARED') {
      this.sharedData.next(merge(this.sharedData.getValue(), message.data.sharedData));
    }
  }

  setSharedData(sharedData: PartialDeep<ISharedData>) {
    this.peerToPeerService.broadcastAndToSelf({
      command: 'UPDATE_SHARED',
      sharedData
    }, {echo: true});
  }

  filterDict<T>(dict: T, fn: (entry: [string, any]) => boolean): Partial<T> {
    return Object.fromEntries(Object.entries(dict).filter(fn)) as Partial<T>;
  }

  getPlayer(playerId: string): Observable<IPlayerTeam> {
    return this.names.pipe(map(t => t[playerId]));
  }

  getPlayerSync(playerId: string): IPlayerTeam {
    return this.names.getValue()[playerId];
  }

  setTeam(team: Color) {
    return this.broadcastNamesMessage({team});
  }

  setSortNumber(playerId: string, sortNumber: number) {
    return this.broadcastNamesMessage({sortNumber}, {id: playerId});
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
    return this.broadcastNamesMessage({isReady});
  }

  setEngineSettings(playerId: string, engineSettings: Partial<IEngineSettings>, team: Color | null = null) {
    const currentEngineSettings = this.getPlayerSync(playerId).engineSettings;
    if (!currentEngineSettings) {
      throw new Error('Engine settings must be defined before updated');
    }
    const player: PartialDeep<IPlayerTeam> = {
      name: getEngineName({...currentEngineSettings, ...engineSettings}),
      sortNumber: 0,
      engineSettings
    };
    if (team != null) {
      player.team = team;
    }

    return this.broadcastNamesMessage(
      player,
      {id: playerId}
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

  private broadcastNamesMessage(data: PartialDeep<IPlayerTeam>, overrides?: {id: string}) {
    const message: MessageData = {
      command: 'INFO',
      player: data,
      overrides
    };
    this.peerToPeerService.broadcastAndToSelf(message, {echo: true});
  }
}
