import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Color } from 'chessground/types';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { PlayerTeamDict } from 'src/app/chess-board/helpers/PlayerTeamHelper';
import { PeerToPeerService } from 'src/app/peer-to-peer.service';
import { PlayerCollectorService } from 'src/app/player-collector.service';
import { RouteNames } from '../routes';

@Component({
  selector: 'app-mp-lobby',
  templateUrl: './mp-lobby.component.html',
  styleUrls: ['./mp-lobby.component.scss'],
  providers: [PlayerCollectorService]
})
export class MpLobbyComponent implements OnInit {
  url: string;
  names: BehaviorSubject<PlayerTeamDict>;
  team1Names: Observable<PlayerTeamDict>;
  team2Names: Observable<PlayerTeamDict>;

  connectedSubscription: Subscription;
  numberReady = 0;
  readyString = 'ready';
  hostUrl: string;

  constructor(private peerToPeerService: PeerToPeerService,
    private router: Router,
    private playerCollectorService: PlayerCollectorService) {
    this.hostUrl = '/join/' + this.peerToPeerService.getHostId();
    this.url = window.location.host + this.router.parseUrl(this.hostUrl).toString();
    this.names = this.playerCollectorService.names;
    this.team1Names = this.playerCollectorService.whiteNames;
    this.team2Names = this.playerCollectorService.blackNames;

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
    this.router.navigate([RouteNames.PLAY]);
  }
}
