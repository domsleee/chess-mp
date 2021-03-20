import { Component, ViewChild } from '@angular/core';
import { Chessground } from 'chessground';
import { NgxChessgroundComponent, NgxChessgroundModule } from 'ngx-chessground';
import * as ChessJS from 'chess.js';
import { OnePlayerBoardChanger } from './helpers/OnePlayerBoardChanger';
import { Square } from 'chess.js';
import { Api } from 'chessground/api';
import { Color, Key, Piece, PiecesDiff } from 'chessground/types';
import { ChessTimerService } from '../chess-timer.service';
import { ChessStatusService } from '../chess-status.service';
import { DEFAULT_ID, PeerToPeerService } from '../peer-to-peer.service';
import { PlayerCollectorService } from '../player-collector.service';
import { MoveHandlerResolver } from './helpers/MoveHandlerResolver';
import { PlayerTeamDict } from './helpers/PlayerTeamHelper';
export const Chess = typeof ChessJS === 'function' ? ChessJS : ChessJS.Chess;

@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.scss'],
  providers: [ChessStatusService]
})
export class ChessBoardComponent {
  // @ts-ignore
  private moveHandlerResolver: MoveHandlerResolver;
  private isSinglePlayer = false;
  myTeam: Color;

  constructor(private chessTimerService: ChessTimerService,
    private chessStatusService: ChessStatusService,
    private peerToPeerService: PeerToPeerService,
    private playerCollectorService: PlayerCollectorService) {
      
    this.updateMoveHandlerResolver();

    this.isSinglePlayer = !this.peerToPeerService.isConnected;
    this.chessTimerService.setStartingTime(60);
    this.myTeam = this.chessStatusService.playersTurnInfo.getTeam(this.peerToPeerService.getId());
  }

  private updateMoveHandlerResolver() {
    const whiteTeamDict = this.playerCollectorService.getColorNames('white');
    const blackTeamDict = this.playerCollectorService.getColorNames('black');
    this.moveHandlerResolver = new MoveHandlerResolver(whiteTeamDict, blackTeamDict);
  }

  @ViewChild('chess') ngxChessgroundComponent!: NgxChessgroundComponent;

  // @ts-ignore
  cg: Api;

  ngAfterViewInit(): void {
    this.chessTimerService.setStartingTime(60);
    this.chessTimerService.startTimer();

    this.ngxChessgroundComponent.runFn = this.run.bind(this);

    this.chessTimerService.timeout.subscribe(color => {
      this.chessStatusService.setTimeout(color);
      this.onGameOver();
    });

    this.peerToPeerService.messageSubject.subscribe(message => {
      if (message.data.command == 'MOVE') {
        this.cg.move(message.data.orig, message.data.dest);
      }
    })
  }

  ngDestroy() {
    this.cg.destroy();
  }

  private run(el: any) {
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
    window.chess = this.chessStatusService.chess;
    // @ts-ignore
    window.cg = this.cg;

    this.getAndApplyNextMove();

    this.setBoardMouseEvents();
    this.cg.set({
      events: { move: (orig, dest) => this.moveHandler(orig, dest, 'q') },
    });

    return this.cg;
  }

  moveHandler(orig: Key, dest: Key, promotion?: Exclude<ChessJS.PieceType, 'p'>) {
    this.movePieceWithPromotion(orig, dest, promotion);

    this.chessTimerService.setTurn(this.chessStatusService.getColor())
    this.cg.set({
      check: this.chessStatusService.chess.in_check() ? this.chessStatusService.getColor() : false,
    });
    this.setBoardMouseEvents();
    this.cg.playPremove();

    if (this.chessStatusService.isGameOver()) {
      this.onGameOver();
    }

    this.getAndApplyNextMove();
  }

  private movePieceWithPromotion(orig: Key, dest: Key, promotion?: Exclude<ChessJS.PieceType, 'p'>) {
    const oldColor = this.chessStatusService.getColor();

    if (!this.isSinglePlayer && this.chessStatusService.didMoveBelongToPlayer(this.peerToPeerService.getId())) {
      this.peerToPeerService.broadcast({
        command: 'MOVE',
        numMoves: this.chessStatusService.getNumMoves(),
        orig,
        dest,
        promotion: promotion
      })
    }

    const res = this.chessStatusService.move({ from: orig as Square, to: dest as Square, promotion: 'q' });
    if (res!.promotion != undefined) {
      let m: PiecesDiff = new Map();
      const piece: Piece = {
        role: 'queen',
        color: oldColor
      };
      m.set(res!.to, piece);
      this.cg.setPieces(m);
    }

    if (res!.captured != null) {
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
    if (this.chessStatusService.isPlayersMove(this.peerToPeerService.getId())) {
      OnePlayerBoardChanger.setMovablezz(this.chessStatusService.chess, this.cg);
    }
    else if (this.chessStatusService.isPlayersMoveNext(this.peerToPeerService.getId())) {
      OnePlayerBoardChanger.setPremovable(this.chessStatusService.chess, this.cg);
    }
    else {
      OnePlayerBoardChanger.setUnmovable(this.chessStatusService.chess, this.cg);
    }
  }

  private async getAndApplyNextMove() {
    const move = await this.moveHandlerResolver.getMoveHander(this.chessStatusService.getNumMoves()).getMove(this.chessStatusService.chess);
    if (this.chessStatusService.isGameOver()) return;
    if (move != null) {
      this.cg.move(move.from, move.to);
    }
  }

}
