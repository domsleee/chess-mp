import { Component, HostListener, ViewChild } from '@angular/core';
import { Chessground } from 'chessground';
import { NgxChessgroundComponent, NgxChessgroundModule } from 'ngx-chessground';
import * as ChessJS from 'chess.js';
import { OnePlayerBoardChanger } from './helpers/OnePlayerBoardChanger';
import { Api } from 'chessground/api';
import { Color, Key, Piece, PiecesDiff } from 'chessground/types';
import { MoveHandlerResolver } from './helpers/MoveHandlerResolver';
import { ChessTimerService } from 'src/app/services/chess-timer.service';
import { ChessStatusService } from 'src/app/services/chess-status.service';
import { PeerToPeerService } from 'src/app/services/peer-to-peer.service';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { AudioService } from 'src/app/services/audio.service';
import { promoteIfNecessary, removeEnPassantIfNecessary } from './helpers/ChessgroundHelpers';
export const Chess = typeof ChessJS === 'function' ? ChessJS : ChessJS.Chess;

@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.scss'],
  providers: [ChessStatusService]
})
export class ChessBoardComponent {
  readonly myTeam: Color;

  private moveHandlerResolver: MoveHandlerResolver; // todo: service?
  private readonly isSinglePlayer;
  private historicalMoveNumber = 0;

  @ViewChild('chess') ngxChessgroundComponent!: NgxChessgroundComponent;

  // @ts-ignore
  cg: Api;

  constructor(private chessTimerService: ChessTimerService,
    private chessStatusService: ChessStatusService,
    private peerToPeerService: PeerToPeerService,
    private sharedDataService: SharedDataService,
    private audioService: AudioService) {
      
    this.moveHandlerResolver = this.updateMoveHandlerResolver();

    this.isSinglePlayer = !this.peerToPeerService.isConnected;
    this.chessTimerService.setStartingTime(60);
    this.myTeam = this.chessStatusService.playersTurnInfo.getTeam(this.peerToPeerService.getId());
  }

  private updateMoveHandlerResolver() {
    const whiteTeamDict = this.sharedDataService.getColorNames('white');
    const blackTeamDict = this.sharedDataService.getColorNames('black');
    return this.moveHandlerResolver = new MoveHandlerResolver(whiteTeamDict, blackTeamDict);
  }

  ngOnInit() {
    const sharedData = this.sharedDataService.sharedData.getValue();
    const timerSettings = sharedData.timerSettings;
    if (timerSettings == undefined) throw new Error('timer settings shoudl not be undefined');

    this.chessTimerService.setupTimer(timerSettings);
    this.chessTimerService.startTimer();
  }

  ngAfterViewInit(): void {
    this.ngxChessgroundComponent.runFn = this.run.bind(this);

    this.chessTimerService.timeout.subscribe(color => {
      this.chessStatusService.setTimeout(color);
      this.onGameOver();
    });

    this.peerToPeerService.messageSubject.subscribe(message => {
      if (message.data.command == 'MOVE') {
        this.processMoveFromExternal({from: message.data.orig, to: message.data.dest, promotion: message.data.promotion});
      }
    })
  }

  ngDestroy() {
    this.cg.destroy();
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === "ArrowLeft") {
      this.navigatePosition(-1);
    }

    if (event.key === "ArrowRight") {
      this.navigatePosition(1);
    }
  }

  private run(el: any) {
    this.cg = Chessground(el, {
      turnColor: 'white',
      animation: {
        enabled: false
      },
      movable: {
        free: false,
      },
      draggable: {
        showGhost: true,
      },
      highlight: {
        check: true,
      },
    });

    const sharedData = this.sharedDataService.sharedData.getValue();
    if (sharedData.startFen) {
      this.setFen(sharedData.startFen);
    }

    this.cg.set({animation: {enabled: true}});

    if (this.myTeam === 'black') {
      this.cg.toggleOrientation();
    }
    
    this.setupDebug();
    this.getAndApplyCPUMove();
    this.setBoardMouseEvents();
    
    this.cg.set({
      events: { move: (orig, dest) => this.cgMoveHandler(orig, dest, 'q') },
    });

    return this.cg;
  }

  private setupDebug() {
    const anyWindow = window as any;
    anyWindow['cg'] = this.cg;
    anyWindow['chess'] = this.chessStatusService.chess;
  }

  private setFen(fen: string) {
    this.cg.set({fen});
    this.chessStatusService.setFen(fen);
  }

  private cgMoveHandler(orig: Key, dest: Key, promotion?: Exclude<ChessJS.PieceType, 'p'>) {
    this.movePieceWithEnPassantAndPromotion({from: orig, to: dest, promotion});

    this.chessTimerService.setTurn(this.chessStatusService.getColor())  
    this.setBoardMouseEvents();
    this.cg.playPremove();

    if (this.chessStatusService.isGameOver()) {
      this.onGameOver();
    }

    this.historicalMoveNumber = this.chessStatusService.getNumMoves();
    this.getAndApplyCPUMove();
  }

  private movePieceWithEnPassantAndPromotion(move: ChessJS.ShortMove) {
    const oldColor = this.chessStatusService.getColor();

    if (!this.isSinglePlayer && this.chessStatusService.didMoveBelongToPlayer(this.peerToPeerService.getId())) {
      this.peerToPeerService.broadcast({
        command: 'MOVE',
        numMoves: this.chessStatusService.getNumMoves(),
        orig: move.from,
        dest: move.to,
        promotion: move.promotion
      })
    }

    const resMove = this.chessStatusService.move(move);

    promoteIfNecessary(resMove!, this.cg, oldColor);
    removeEnPassantIfNecessary(resMove!, this.cg);

    this.playMoveSound(resMove!.captured != null);
   
    this.cg.set({
      check: this.chessStatusService.chess.in_check() ? this.chessStatusService.getColor() : false,
    });

    return move;
  }

  private playMoveSound(captured: boolean) {
    if (captured) {
      this.audioService.capture.play();
    } else {
      this.audioService.move.play();
    }
  }

  private onGameOver() {
    this.cg.stop();
    this.audioService.genericNotify.play();
    this.chessTimerService.pauseTimer();
  }

  private setBoardMouseEvents() {
    if (this.chessStatusService.isPlayersMove(this.peerToPeerService.getId())) {
      return OnePlayerBoardChanger.setMovable(this.chessStatusService.chess, this.cg);
    }
    else if (this.chessStatusService.isPlayersMoveNext(this.peerToPeerService.getId())) {
      return OnePlayerBoardChanger.setPremovable(this.chessStatusService.chess, this.cg);
    }
    return OnePlayerBoardChanger.setUnmovable(this.cg);
  }

  private async getAndApplyCPUMove() {
    const move = await this.moveHandlerResolver.getMoveHander(this.chessStatusService.getNumMoves()).getMove(this.chessStatusService.chess);
    if (this.chessStatusService.isGameOver()) return;
    if (move != null) {
      this.processMoveFromExternal(move);
    }
  }

  private processMoveFromExternal(move: ChessJS.ShortMove) {
    this.resetHistoryIfRequired();
    this.cg.move(move.from, move.to);
  }

  private navigatePosition(offset: number) {
    if (offset < 0 && this.historicalMoveNumber + offset >= 0) {
      this.historicalMoveNumber += offset;
      this.setCgForHistoricalMove(this.historicalMoveNumber);
      OnePlayerBoardChanger.setUnmovable(this.cg);
    }
    else if (offset > 0 && this.historicalMoveNumber + offset <= this.chessStatusService.getNumMoves()) {
      this.historicalMoveNumber += offset;
      this.setCgForHistoricalMove(this.historicalMoveNumber);
      if (this.historicalMoveNumber == this.chessStatusService.getNumMoves()) {
        OnePlayerBoardChanger.setMovable(this.chessStatusService.chess, this.cg);
      }
    }
  }

  private setCgForHistoricalMove(moveNumber: number) {
    this.cg.set({
      fen: this.chessStatusService.getFenForMove(moveNumber),
    });
    if (moveNumber == 0) {
      this.cg.set({lastMove: undefined});
      this.playMoveSound(false);
    } else {
      const lastMove = this.chessStatusService.getPreviousMoveForMove(moveNumber);
      this.cg.set({
        lastMove: [lastMove.from, lastMove.to],
        highlight: {lastMove: true}
      });
      this.playMoveSound(lastMove.captured != null);
    }
  }

  private resetHistoryIfRequired() {
    if (this.historicalMoveNumber != this.chessStatusService.getNumMoves()) {
      this.historicalMoveNumber = this.chessStatusService.getNumMoves();
      const oldAnimation = this.cg.state.animation.enabled;
      this.cg.set({animation: {enabled: false}});
      this.cg.set({fen: this.chessStatusService.getFenForMove(this.historicalMoveNumber)});
      this.cg.set({animation: {enabled: oldAnimation}});
    }
  }
}
