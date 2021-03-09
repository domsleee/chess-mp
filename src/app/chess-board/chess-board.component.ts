import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Chessground } from 'chessground';
import { NgxChessgroundComponent, NgxChessgroundModule } from 'ngx-chessground';
import { initial, invertColor, toColor, toDests } from '../util/play';
import * as ChessJS from 'chess.js';
import { OnePlayerBoardChanger } from './helpers/OnePlayerBoardChanger';
import { Square } from 'chess.js';
import { Api } from 'chessground/api';
import { Color, Key, Piece, PiecesDiff } from 'chessground/types';
import { ChessTimerService } from '../chess-timer.service';
import { ChessStatusService } from '../chess-status.service';
import { PeerToPeerService } from '../peer-to-peer.service';
import { Router } from '@angular/router';
import { IPlayerTeam, NameType } from '../player-collector.service';
import { MoveHandler } from './helpers/MoveHandlerFactory';
import { DataFerryService } from '../data-ferry.service';
export const Chess = typeof ChessJS === 'function' ? ChessJS : ChessJS.Chess;

@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.scss']
})
export class ChessBoardComponent {
  private myMoveHandler: MoveHandler;
  private afterViewCount = 0;
  myTeam: Color;

  constructor(private chessTimerService: ChessTimerService,
    private ChessStatusService: ChessStatusService,
    private PeerToPeerService: PeerToPeerService,
    private router: Router,
    private dataFerryService: DataFerryService) {
    const names: NameType | null = this.dataFerryService.getNames();

    console.log(this.router.getCurrentNavigation()?.extras?.state);
    console.log("CONSTRUCTOR", names);
    if (names == null) {
      this.myMoveHandler = new MoveHandler('a', null);
    } else {
      this.myMoveHandler = new MoveHandler(this.PeerToPeerService.getId(), names);
    }

    this.chessTimerService.setStartingTime(60);

    this.myTeam = this.myMoveHandler.getTeam();
  }

  @ViewChild('chess') ngxChessgroundComponent!: NgxChessgroundComponent;

  // @ts-ignore
  cg: Api;

  // @ts-ignore
  chess: ChessJS.ChessInstance;

  ngAfterViewInit(): void {
    this.afterViewCount++;
    console.log("AFTER VIEW INIT...", this.afterViewCount);

    this.chessTimerService.setStartingTime(60);
    this.chessTimerService.startTimer();
    this.chess = new Chess();

    this.ngxChessgroundComponent.runFn = this.run.bind(this);

    this.chessTimerService.timeout.subscribe(color => {
      this.ChessStatusService.setTimeout(color);
      this.onGameOver();
    });

    this.PeerToPeerService.messageSubject.subscribe(message => {
      if (message.data.command == 'MOVE') {
        this.cg.move(message.data.orig, message.data.dest);
      }
    })
  }

  ngDestroy() {
    this.cg.destroy();
  }

  run(el: any) {
    console.log("RUN");

    this.cg = Chessground(el, {
      turnColor: 'white',
      movable: {
        free: false,
      },
      animation: { enabled: false },
      draggable: {
        showGhost: true,
      },
      highlight: {
        check: true,
      },
    });

    if (this.myTeam === 'black') {
      this.cg.toggleOrientation();
    }

    // @ts-ignore
    window.chess = this.chess;
    // @ts-ignore
    window.cg = this.cg;

    this.getAndApplyNextMove(this.cg, this.chess);

    this.setBoardMouseEvents();
    this.cg.set({
      events: { move: (orig, dest) => this.moveHandler(orig, dest, 'q') },
    });

    return this.cg;
  }

  moveHandler(orig: Key, dest: Key, promotion?: Exclude<ChessJS.PieceType, 'p'>) {
    this.movePieceWithPromotion(orig, dest, promotion);

    this.chessTimerService.setTurn(toColor(this.chess))
    this.cg.set({
      check: this.chess.in_check() ? toColor(this.chess) : false,
    });
    this.setBoardMouseEvents();
    this.cg.playPremove();

    this.ChessStatusService.updateStatusFromGame(this.chess);

    if (this.ChessStatusService.isGameOver()) {
      this.onGameOver();
    }

    this.getAndApplyNextMove(this.cg, this.chess);
  }

  private movePieceWithPromotion(orig: Key, dest: Key, promotion?: Exclude<ChessJS.PieceType, 'p'>) {
    const oldColor = toColor(this.chess);

    if (this.myMoveHandler.didMoveBelongToMe(this.getNumMoves())) {
      this.PeerToPeerService.broadcast({
        command: 'MOVE',
        numMoves: this.getNumMoves(),
        orig,
        dest,
        promotion: promotion
      })
    }

    const res = this.chess.move({ from: orig as Square, to: dest as Square, promotion: 'q' });
    if (res != null && res.promotion != undefined) {
      let m: PiecesDiff = new Map();
      const piece: Piece = {
        role: 'queen',
        color: oldColor
      };
      m.set(res.to, piece);
      this.cg.setPieces(m);
    }

    if (res?.captured != null) {
      new Audio('/assets/audio/Capture.mp3').play();
    } else {
      new Audio('/assets/audio/Move.mp3').play();
    }

    return res;
  }

  private onGameOver() {
    this.cg.stop();
    new Audio('/assets/audio/GenericNotify.mp3').play();

    this.chessTimerService.pauseTimer();
  }

  private setBoardMouseEvents() {
    const numMoves = this.getNumMoves();
    console.log(this.chess.history());
    if (this.myMoveHandler.isMyMove(numMoves)) {
      OnePlayerBoardChanger.setMovablezz(this.chess, this.cg);
    }
    else if (this.myMoveHandler.isMyMoveNext(numMoves)) {
      OnePlayerBoardChanger.setPremovable(this.chess, this.cg);
    }
    else {
      OnePlayerBoardChanger.setUnmovable(this.chess, this.cg);
    }
  }

  private getNumMoves() {
    return this.chess.history().length;
  }

  async getAndApplyNextMove(cg: Api, chess: ChessJS.ChessInstance) {
    const move = await this.myMoveHandler.getMoveHander(this.getNumMoves()).getMove(this.chess);
    if (this.ChessStatusService.isGameOver()) return;
    if (move != null) {
      cg.move(move.from, move.to);
    }
  }

}
