import { Injectable } from '@angular/core';
import { Color } from 'chessground/types';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
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


@Injectable()
export class PlayerCollectorService {
  messageSubscription: Subscription;
  names: BehaviorSubject<PlayerTeamDict> = new BehaviorSubject({});
  newName: Subject<void> = new Subject();

  constructor(private peerToPeerService: PeerToPeerService) {
    this.setTeam('white');
    this.messageSubscription = this.peerToPeerService.messageSubject.subscribe(this.processMessage.bind(this));
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
      let currNames = this.names.getValue();
      const existingValue: IPlayerTeam | null = currNames[message.data.name];

      if (existingValue != null) {
        delete currNames[message.data.name];
      }
      this.names.next(currNames);
    }
  }

  setTeam(team: Color) {
    const message = this.peerToPeerService.broadcast({
      command: 'INFO',
      name: this.peerToPeerService.getAlias(),
      team: team,
      owner: this.peerToPeerService.getId()
    });
    this.processMessage(message);
  }

  setIsReady(isReady: boolean) {
    const message = this.peerToPeerService.broadcast({
      command: 'INFO',
      name: this.peerToPeerService.getAlias(),
      owner: this.peerToPeerService.getId(),
      isReady
    });
    this.processMessage(message);
  }
}
