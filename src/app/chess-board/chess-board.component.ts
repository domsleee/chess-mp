import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Chessground } from 'chessground';
import { NgxChessgroundComponent, NgxChessgroundModule } from 'ngx-chessground';
import { initial, toColor } from '../util/play';
import * as ChessJS from 'chess.js';
import { OnePlayerBoardChanger } from './helpers/OnePlayerBoardChanger';
import { DummyGetNextMove } from './helpers/GetNextMove/DummyGetNextMove';
import { Square } from 'chess.js';
import { IBoardChanger } from './helpers/IBoardChanger';
import { IGetNextMove } from './helpers/GetNextMove/IGetNextMove';
import { Api } from 'chessground/api';
import { Key, Piece, PiecesDiff } from 'chessground/types';
import { NullGetNextMove } from './helpers/GetNextMove/NullGetNextMove';
import { ChessTimerComponent } from '../chess-timer/chess-timer.component';
import { ChessTimerService } from '../chess-timer.service';
import { StockfishGetNextMove } from './helpers/GetNextMove/StockfishGetNextMove';
export const Chess = typeof ChessJS === 'function' ? ChessJS : ChessJS.Chess;

@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.scss']
})
export class ChessBoardComponent {
  boardChanger: IBoardChanger;
  getNextMoveHandlers: {'white': IGetNextMove, 'black': IGetNextMove};

  constructor(private chessTimerService: ChessTimerService) {
    this.boardChanger = new OnePlayerBoardChanger('white');
    this.getNextMoveHandlers = {
      'white': new NullGetNextMove(),
      'black': new StockfishGetNextMove(),
    }
    this.chessTimerService.setStartingTime(60);
  }

  @ViewChild('chess') ngxChessgroundComponent!: NgxChessgroundComponent;

  // @ts-ignore
  cg: Api;

  // @ts-ignore
  chess: ChessJS.ChessInstance;

  ngAfterViewInit(): void {
    this.chessTimerService.startTimer();
    this.chess = new Chess();
    this.ngxChessgroundComponent.runFn = this.run.bind(this);
  }

  run(el: any) {
    this.cg = Chessground(el, {
      turnColor: 'white',
      movable: {
        free: false,
      },
      animation: { enabled: true },
      draggable: {
        showGhost: true,
      },
      highlight: {
        check: true,
      },
    });

    // @ts-ignore
    window.chess = this.chess;
    // @ts-ignore
    window.cg = this.cg;

    this.getAndApplyNextMove(this.cg, this.chess);

    this.boardChanger.initial(this.chess, this.cg);
    this.cg.set({
      events: { move: this.moveHandler.bind(this) },
    });

    return this.cg;
  }

  moveHandler(orig: Key, dest: Key) {
    const oldColor = toColor(this.chess);
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

    this.chessTimerService.setTurn(toColor(this.chess))
    this.cg.set({
      check: this.chess.in_check() ? toColor(this.chess) : false,
    });
    this.boardChanger.onMove(this.chess, this.cg);
    this.cg.playPremove();
    this.getAndApplyNextMove(this.cg, this.chess);
  }

  async getAndApplyNextMove(cg: Api, chess: ChessJS.ChessInstance) {
    const move = await this.getNextMoveHandlers[toColor(chess)].getMove(chess);
    console.log("MOVE", move);
    if (move != null) {
      cg.move(move.from, move.to);
    }
  }

}
