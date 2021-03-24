import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Color } from 'chessground/types';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { PlayerTeamDict } from 'src/app/chess-board/helpers/PlayerTeamHelper';
import { PeerToPeerService } from 'src/app/peer-to-peer.service';
import { IMessage, ISendNames } from 'src/app/peer-to-peer/defs';
import { ISharedData } from 'src/app/peer-to-peer/shared-data';
import { SharedDataService } from 'src/app/shared-data.service';
import { RouteNames } from '../routes';

@Component({
  selector: 'app-mp-lobby',
  templateUrl: './mp-lobby.component.html',
  styleUrls: ['./mp-lobby.component.scss']
})
export class MpLobbyComponent implements OnInit {
  url: string;

  connectedSubscription: Subscription;
  numberReady = 0;
  readyString = 'ready';
  hostUrl: string;
  sharedData: Observable<ISharedData>;

  constructor(private peerToPeerService: PeerToPeerService,
    private router: Router,
    private sharedDataService: SharedDataService) {
    this.hostUrl = '/join/' + this.peerToPeerService.getHostId();
    this.url = window.location.host + this.router.parseUrl(this.hostUrl).toString();

    this.sharedData = this.sharedDataService.sharedData.asObservable();

    this.connectedSubscription = this.sharedDataService.newName.subscribe((id) => {
      if (this.peerToPeerService.isHost) {
        const message: ISendNames = {
          command: 'SET_NAMES',
          names: this.sharedDataService.names.getValue(),
          sharedData: this.sharedDataService.sharedData.getValue()
        };
        this.peerToPeerService.sendSingleMessage(id, message);
      }

      this.setTeam(this.sharedDataService.getPlayerSync(this.peerToPeerService.getId()).team);
    })
    this.sharedDataService.names.subscribe((names) => {
      this.numberReady = Object.values(names).filter(t => t.isReady).length;
    })
    this.peerToPeerService.messageSubject.subscribe((message) => {
      if (message.data.command == 'START') {
        this.startGameNoBroadcast();
      }
    })
  }


  ngOnInit(): void {
    this.setTeam('white');
  }

  ngOnDestroy() {
    this.connectedSubscription.unsubscribe();
  }

  setTeam(team: Color) {
    this.sharedDataService.setTeam(team);
  }

  readyClick() {
    console.log('ready click')
    this.readyString = this.readyString == 'ready' ? 'not ready' : 'ready';
    this.sharedDataService.setIsReady(this.readyString == 'not ready');
  }

  startGame() {
    this.startGameNoBroadcast();
    this.peerToPeerService.broadcast({
      command: 'START'
    });
  }

  startGameNoBroadcast() {
    this.router.navigate([RouteNames.PLAY]);
  }
}
