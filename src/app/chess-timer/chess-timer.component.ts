import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlayerTeamDict } from '../chess-board/helpers/PlayerTeamHelper';
import { ChessStatusService } from '../chess-status.service';
import { ChessTimerFormatPipe } from '../chess-timer-format.pipe';
import { ChessTimerService } from '../chess-timer.service';
import { DEFAULT_ID, PeerToPeerService } from '../peer-to-peer.service';
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
  currentId: Observable<string>;
  nextId: Observable<string>;
  myName: Observable<string>;
  myId: string;

  whiteNames: Observable<PlayerTeamDict>;
  blackNames: Observable<PlayerTeamDict>;

  @Input() inverted = false;
  flexDirection = 'column';

  constructor(private chessTimerService: ChessTimerService,
    private ChessStatusService: ChessStatusService,
    private peerToPeerService: PeerToPeerService,
    private playerCollectorService: PlayerCollectorService) {
    this.whiteTime = this.chessTimerService.whiteTime;
    this.blackTime = this.chessTimerService.blackTime;
    this.currentStatus = this.ChessStatusService.currentStatus;
    this.whiteNames = this.playerCollectorService.whiteNames;
    this.blackNames = this.playerCollectorService.blackNames;

    this.currentId = this.ChessStatusService.currentTurn.asObservable().pipe(map(([key, value]) => key));
    this.nextId = this.ChessStatusService.nextTurn.asObservable().pipe(map(([key, value]) => key));
    this.currentTurn = this.ChessStatusService.currentTurn.asObservable().pipe(map(([key, value]) => value?.name ?? key));
    this.myId = this.peerToPeerService.getId();
    this.myName = this.playerCollectorService.names.pipe(map(t => t[this.peerToPeerService.getId()]?.name ?? DEFAULT_ID));
  }

  ngOnInit() {
    this.flexDirection = !this.inverted ? 'column' : 'column-reverse';
  }
}
