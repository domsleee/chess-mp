import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Color } from 'chessground/types';
import Peer from 'peerjs';
import { BehaviorSubject, Subscription } from 'rxjs';
import { PeerToPeerService } from 'src/app/peer-to-peer.service';
import { IInfo } from 'src/app/peer-to-peer/defs';
import { IPlayerTeam, PlayerCollectorService } from 'src/app/player-collector.service';

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

  constructor(private peerToPeerService: PeerToPeerService,
    private router: Router,
    private playerCollectorService: PlayerCollectorService) {
    this.url = window.location.host + this.router.parseUrl('join/' + this.peerToPeerService.getHostId()).toString();
    this.names = this.playerCollectorService.names;
    this.connectedSubscription = this.playerCollectorService.newName.subscribe(() => {
      this.setTeam(this.playerCollectorService.names.getValue()[this.peerToPeerService.getId()].team);
    })
    this.playerCollectorService.names.subscribe((names) => {
      this.numberReady = Object.values(names).filter(t => t.isReady).length;
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

}
