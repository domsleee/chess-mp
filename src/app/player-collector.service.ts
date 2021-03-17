import { Injectable } from '@angular/core';
import { Color } from 'chessground/types';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { PeerToPeerService } from './peer-to-peer.service';
import { IInfo, IMessage } from './peer-to-peer/defs';

export interface IPlayerTeam {
  name: string;
  team: Color;
  owner: string;
  isOwnedByMe: boolean;
  isReady: boolean;
};

export type PlayerTeamDict = {[id: string]: IPlayerTeam};


@Injectable({
  providedIn: 'root'
})
export class PlayerCollectorService {
  messageSubscription: Subscription;
  names: BehaviorSubject<PlayerTeamDict> = new BehaviorSubject({});
  newName: Subject<void> = new Subject();
  team1Names: Observable<PlayerTeamDict>;
  team2Names: Observable<PlayerTeamDict>;

  constructor(private peerToPeerService: PeerToPeerService) {
    this.messageSubscription = this.peerToPeerService.messageSubject.subscribe(this.processMessage.bind(this));
    this.team1Names = this.names.pipe(map(t => this.keyValueFilter(t, "white")));
    this.team2Names = this.names.pipe(map(t => this.keyValueFilter(t, "black")));
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
      const isNewName = !(message.from in currNames);

      const existingValue: IPlayerTeam | null = currNames[message.from];

      currNames[message.from] = {
        name: message.data.name,
        owner: message.data.owner,
        isOwnedByMe: message.data.owner === this.peerToPeerService.getId(),
        team: message.data.team ?? existingValue?.team ?? 'white',
        isReady: message.data.isReady ?? existingValue?.isReady ?? false
      };

      this.names.next(currNames);
      if (isNewName) this.newName.next();
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
  }

  setTeam(team: Color) {
    this.peerToPeerService.broadcastAndToSelf({
      command: 'INFO',
      name: this.peerToPeerService.getAlias(),
      team: team,
      owner: this.peerToPeerService.getId()
    });
  }

  setIsReady(isReady: boolean) {
    this.peerToPeerService.broadcastAndToSelf({
      command: 'INFO',
      name: this.peerToPeerService.getAlias(),
      owner: this.peerToPeerService.getId(),
      isReady
    });
  }
}
