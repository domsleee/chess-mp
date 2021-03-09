import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Color } from 'chessground/types';
import Peer from 'peerjs';
import { BehaviorSubject, Subscription } from 'rxjs';
import { DataFerryService } from 'src/app/data-ferry.service';
import { PeerToPeerService } from 'src/app/peer-to-peer.service';
import { IInfo } from 'src/app/peer-to-peer/defs';
import { IPlayerTeam, PlayerCollectorService } from 'src/app/player-collector.service';
import { RouteNames } from '../routes';

@Component({
  selector: 'app-mp-lobby',
  templateUrl: './mp-lobby.component.html',
  styleUrls: ['./mp-lobby.component.scss'],
  providers: [PlayerCollectorService]
})
export class MpLobbyComponent implements OnInit {
  url: string;
  names: BehaviorSubject<{[id: string]: IPlayerTeam}>;
  connectedSubscription: Subscription;
  numberReady = 0;
  readyString = 'ready';
  hostUrl: string;

  constructor(private peerToPeerService: PeerToPeerService,
    private router: Router,
    private playerCollectorService: PlayerCollectorService,
    private dataFerryService: DataFerryService) {
    this.hostUrl = '/join/' + this.peerToPeerService.getHostId();
    this.url = window.location.host + this.router.parseUrl(this.hostUrl).toString();
    this.names = this.playerCollectorService.names;
    this.connectedSubscription = this.playerCollectorService.newName.subscribe(() => {
      this.setTeam(this.playerCollectorService.names.getValue()[this.peerToPeerService.getId()].team);
    })
    this.playerCollectorService.names.subscribe((names) => {
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
    this.playerCollectorService.setTeam(team);
  }

  readyClick() {
    console.log('ready click')
    this.readyString = this.readyString == 'ready' ? 'not ready' : 'ready';
    this.playerCollectorService.setIsReady(this.readyString == 'not ready');
  }

  startGame() {
    this.startGameNoBroadcast();
    this.peerToPeerService.broadcast({
      command: 'START'
    });
  }

  startGameNoBroadcast() {
    this.dataFerryService.setNames(this.names.getValue());
    this.router.navigate([RouteNames.PLAY]);
  }
}
