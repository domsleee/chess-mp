import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { ChessTimerFormatPipe } from 'src/app/services/chess-timer-format.pipe';
import { ChessTimerService } from 'src/app/services/chess-timer.service';
import { DEFAULT_ID, PeerToPeerService } from 'src/app/services/peer-to-peer.service';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { PlayerTeamDict } from '../chess-board/helpers/PlayerTeamHelper';
import { ChessStatusService } from 'src/app/services/chess-status.service';
import { Router } from '@angular/router';
import { RouteNames } from 'src/app/pages/routes';
import { RouteUtilsService } from 'src/app/services/route-utils.service';
import { ChessBoardResetService } from 'src/app/services/chess-board-reset.service';


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
    private sharedDataService: SharedDataService,
    private chessBoardResetService: ChessBoardResetService) {
    this.whiteTime = this.chessTimerService.whiteTime;
    this.blackTime = this.chessTimerService.blackTime;
    this.currentStatus = this.ChessStatusService.currentStatus;
    this.whiteNames = this.sharedDataService.whiteNames;
    this.blackNames = this.sharedDataService.blackNames;

    this.currentId = this.ChessStatusService.currentTurn.asObservable().pipe(map(([key, value]) => key));
    this.nextId = this.ChessStatusService.nextTurn.asObservable().pipe(map(([key, value]) => key));
    this.currentTurn = this.ChessStatusService.currentTurn.asObservable().pipe(map(([key, value]) => value?.name ?? key));
    this.myId = this.peerToPeerService.getId();
    this.myName = this.sharedDataService.names.pipe(map(t => t[this.peerToPeerService.getId()]?.name ?? DEFAULT_ID));
  }

  ngOnInit() {
    this.flexDirection = !this.inverted ? 'column' : 'column-reverse';
  }

  resetBoard() {
    this.chessBoardResetService.doReset();
  }
}
