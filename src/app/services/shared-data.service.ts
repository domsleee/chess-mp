import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Color } from 'chessground/types';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { getDefaultNames, IEngineSettings, IPlayerTeam, keyValueFilter, PlayerTeamDict } from '../components/chess-board/helpers/PlayerTeamHelper';
import { getEngineName } from '../shared/engine/engine-helpers';
import { IMessage, MessageData } from '../shared/peer-to-peer/defs';
import { getDefaultSharedData, ISharedData } from '../shared/peer-to-peer/shared-data';
import { GetCpuIdService } from './get-cpu-id.service';
import { PeerToPeerService } from './peer-to-peer.service';
import merge from 'lodash-es/merge';
import { PartialDeep, ReadonlyDeep } from 'type-fest';

const debug = console.log;

@Injectable({
  providedIn: 'root'
})
export class SharedDataService implements OnDestroy {
  messageSubscription: Subscription;
  numNames = new BehaviorSubject<number>(0);
  newName: Subject<string> = new Subject();

  private names: BehaviorSubject<PlayerTeamDict> = new BehaviorSubject({});
  private sharedData: BehaviorSubject<ISharedData> = new BehaviorSubject(getDefaultSharedData());

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
      white: this.names.pipe(map(t => keyValueFilter(t, 'white'))),
      black: this.names.pipe(map(t => keyValueFilter(t, 'black')))
    };

    if (!this.peerToPeerService.isConnected) {
      this.names.next(getDefaultNames());
    }
  }

  ngOnDestroy() {
    this.messageSubscription.unsubscribe();
  }

  // ========== shared data methods
  getSharedData(): Observable<Readonly<ISharedData>> {
    return this.sharedData.asObservable();
  }

  getSharedDataSync(): ReadonlyDeep<ISharedData> {
    return this.sharedData.getValue();
  }

  setSharedData(sharedData: PartialDeep<ISharedData>) {
    this.peerToPeerService.broadcastAndToSelf({
      command: 'UPDATE_SHARED',
      sharedData
    }, {echo: true});
  }

  // ========== player methods
  updateNames(names: PlayerTeamDict) {
    this.names.next(names);
  }

  getNames(color?: Color): Readonly<Observable<PlayerTeamDict>> {
    if (color === undefined) {
      return this.names.asObservable();
    }
    return this.nameByTeamObservable[color];
  }

  getNamesSync(color?: Color): PlayerTeamDict {
    if (color === undefined) {
      return this.names.getValue();
    }
    return keyValueFilter(this.names.getValue(), color);
  }

  getPlayerSync(playerId: string): Readonly<IPlayerTeam> {
    return this.names.getValue()[playerId];
  }

  setTeam(team: Color) {
    return this.broadcastNamesMessage({team});
  }

  setSortNumber(playerId: string, sortNumber: number) {
    return this.broadcastNamesMessage({sortNumber}, {id: playerId});
  }

  setIsReady(isReady: boolean) {
    return this.broadcastNamesMessage({isReady});
  }

  setEngineSettings(playerId: string, engineSettings: Partial<IEngineSettings>) {
    const currentEngineSettings = this.getPlayerSync(playerId).engineSettings;
    if (!currentEngineSettings) {
      throw new Error('Engine settings must be defined before updated');
    }
    const player: PartialDeep<IPlayerTeam> = {
      name: getEngineName({...currentEngineSettings, ...engineSettings}),
      sortNumber: 0,
      engineSettings
    };

    return this.broadcastNamesMessage(
      player,
      {id: playerId}
    );
  }

  setRematchRequested(rematchRequested: boolean) {
    return this.broadcastNamesMessage({rematchRequested});
  }

  broadcastNamesMessage(data: PartialDeep<IPlayerTeam>, overrides?: {id: string}) {
    const message: MessageData = {
      command: 'INFO',
      player: data,
      overrides
    };
    this.peerToPeerService.broadcastAndToSelf(message, {echo: true});
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
      console.log('NEXT NAMES after dc...', newNames);
    }
    else if (message.data.command === 'SET_NAMES') {
      const currNames = this.names.getValue();
      this.names.next(merge(currNames, message.data.names));
      this.sharedData.next(message.data.sharedData);
    }
    else if (message.data.command === 'UPDATE_SHARED') {
      this.sharedData.next(merge(this.getSharedDataSync(), message.data.sharedData));
    }
  }
}
