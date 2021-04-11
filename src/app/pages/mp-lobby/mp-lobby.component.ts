import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Color } from 'chessground/types';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { PlayerTeamDict } from 'src/app/components/chess-board/helpers/PlayerTeamHelper';
import { IMessage, ISendNames } from 'src/app/shared/peer-to-peer/defs';
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
export class MpLobbyComponent implements OnInit {
  url: string;

  readonly connectedSubscription: Subscription;
  numberReady = 0;
  readyString = 'ready';
  readonly hostUrl: string;
  readonly sharedData: Observable<ISharedData>;

  constructor(private peerToPeerService: PeerToPeerService,
    private router: Router,
    private sharedDataService: SharedDataService,
    @Inject(APP_BASE_HREF) private baseHref: string) {
    this.hostUrl = `/join/${this.peerToPeerService.getHostId()}`;
    this.url = `${window.location.origin}${this.baseHref}${this.hostUrl.substring(1)}`;

    this.sharedData = this.sharedDataService.sharedData.asObservable();

    this.connectedSubscription = this.sharedDataService.newName.subscribe((id) => {
      if (this.peerToPeerService.isHost) {
        this.peerToPeerService.sendSingleMessage(id, {
          command: 'SET_NAMES',
          names: this.sharedDataService.names.getValue(),
          sharedData: this.sharedDataService.sharedData.getValue()
        });
      }
      //this.setTeam(this.sharedDataService.getPlayerSync(this.peerToPeerService.getId()).team);
    });
    this.sharedDataService.names.subscribe((names) => {
      this.numberReady = Object.values(names).filter(t => t.isReady).length;
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
    //this.setTeam('white');
    //this.sharedDataService.setSortNumber(this.peerToPeerService.getId(), 0);
  }

  ngOnDestroy() {
    this.connectedSubscription.unsubscribe();
  }

  setTeam(team: Color) {
    this.sharedDataService.setTeam(team);
  }

  readyClick() {
    console.log('ready click')
    this.readyString = this.readyString === 'ready' ? 'not ready' : 'ready';
    this.sharedDataService.setIsReady(this.readyString === 'not ready');
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
