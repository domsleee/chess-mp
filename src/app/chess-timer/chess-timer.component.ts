import { Component, Input, OnInit } from '@angular/core';
import Peer from 'peerjs';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { ChessStatusService } from '../chess-status.service';
import { ChessTimerFormatPipe } from '../chess-timer-format.pipe';
import { ChessTimerService } from '../chess-timer.service';
import { PeerToPeerService } from '../peer-to-peer.service';
import { PlayerCollectorService } from '../player-collector.service';


@Component({
  selector: 'app-chess-timer',
  templateUrl: './chess-timer.component.html',
  styleUrls: ['./chess-timer.component.scss'],
  providers: [ChessTimerFormatPipe]
})
export class ChessTimerComponent {
  whiteTime: BehaviorSubject<number>;
  blackTime: BehaviorSubject<number>;
  currentStatus: BehaviorSubject<string>;
  currentTurn: Observable<string>;
  myName: Observable<string>;

  @Input() inverted: boolean = false;
  flexDirection = 'column';

  constructor(private chessTimerService: ChessTimerService,
    private ChessStatusService: ChessStatusService,
    private peerToPeerService: PeerToPeerService,
    private playerCollectorService: PlayerCollectorService) {
    this.whiteTime = this.chessTimerService.whiteTime;
    this.blackTime = this.chessTimerService.blackTime;
    this.currentStatus = this.ChessStatusService.currentStatus;
    this.currentTurn = this.ChessStatusService.currentTurn.asObservable().pipe(map(([key, value]) => {
      if (value == null) return key;
      return value.name;
    }));
    this.myName = this.playerCollectorService.names.pipe(map(t => t[this.peerToPeerService.getId()].name))
  }

  ngOnInit() {
    this.flexDirection = !this.inverted ? 'column' : 'column-reverse';
  }
}
