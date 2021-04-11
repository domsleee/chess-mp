import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Color } from 'chessground/types';
import { Observable, Subscription } from 'rxjs';
import { ISharedData } from 'src/app/shared/peer-to-peer/shared-data';
import { PeerToPeerService } from 'src/app/services/peer-to-peer.service';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { RouteNames } from '../routes';
import { APP_BASE_HREF } from '@angular/common';

@Component({
  selector: 'app-mp-lobby',
  templateUrl: './mp-lobby.component.html',
  styleUrls: ['./mp-lobby.component.scss']
})
export class MpLobbyComponent implements OnInit, OnDestroy {
  url: string;

  readonly connectedSubscription: Subscription;
  readonly hostUrl: string;
  readonly sharedData: Observable<ISharedData>;

  constructor(
    private peerToPeerService: PeerToPeerService,
    private router: Router,
    private sharedDataService: SharedDataService,
    @Inject(APP_BASE_HREF) private baseHref: string
  ) {
    this.hostUrl = `/join/${this.peerToPeerService.getHostId()}`;
    this.url = `${window.location.origin}${this.baseHref}${this.hostUrl.substring(1)}`;

    this.sharedData = this.sharedDataService.getSharedData();

    this.connectedSubscription = this.sharedDataService.newName.subscribe((id) => {
      if (this.peerToPeerService.isHost) {
        this.peerToPeerService.sendSingleMessage(id, {
          command: 'SET_NAMES',
          names: this.sharedDataService.getNamesSync(),
          sharedData: this.sharedDataService.getSharedDataSync()
        });
      }
    });
    this.peerToPeerService.messageSubject.subscribe((message) => {
      if (message.data.command === 'START') {
        this.startGameNoBroadcast();
      }
    });
  }


  ngOnInit(): void {
    this.sharedDataService.createPlayer({
      name: this.peerToPeerService.getAlias(),
      team: 'white',
      owner: this.peerToPeerService.getId(),
      sortNumber: 0
    }, this.peerToPeerService.getId());
  }

  ngOnDestroy() {
    this.connectedSubscription.unsubscribe();
  }

  setTeam(team: Color) {
    this.sharedDataService.setTeam(team);
  }

  startGame() {
    this.peerToPeerService.broadcastAndToSelf({
      command: 'START'
    });
  }

  startGameNoBroadcast() {
    this.router.navigate([RouteNames.PLAY]);
  }
}
