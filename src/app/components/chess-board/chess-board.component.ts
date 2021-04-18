import { AfterContentInit, AfterViewInit, Component, HostListener, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Chessground } from 'chessground';
import { NgxChessgroundComponent, NgxChessgroundModule } from 'ngx-chessground';
import * as ChessJS from 'chess.js';
import { OnePlayerBoardChanger } from './helpers/OnePlayerBoardChanger';
import { Api } from 'chessground/api';
import { Color, Key } from 'chessground/types';
import { MoveHandlerResolver } from './helpers/MoveHandlerResolver';
import { ChessTimerService } from 'src/app/services/chess-timer.service';
import { ChessStatusService } from 'src/app/services/chess-status.service';
import { PeerToPeerService } from 'src/app/services/peer-to-peer.service';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { AudioService } from 'src/app/services/audio.service';
import { promoteIfNecessary, removeEnPassantIfNecessary } from './helpers/ChessgroundHelpers';
import { Subscription } from 'rxjs';
import { ChessTimeoutService } from 'src/app/services/chess-timeout.service';
import { KeyboardShortcutsComponent, ShortcutInput } from 'ng-keyboard-shortcuts';
import { CommandService } from 'src/app/services/command.service';
export const Chess = typeof ChessJS === 'function' ? ChessJS : ChessJS.Chess;

@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.scss'],
  providers: [ChessStatusService, ChessTimerService, ChessTimeoutService]
})
export class ChessBoardComponent implements OnInit, OnDestroy, AfterContentInit, AfterViewInit {
  readonly myTeam: Color;

  private moveHandlerResolver!: MoveHandlerResolver; // todo: service?
  private readonly isSinglePlayer;
  private historicalMoveNumber!: number;
  private chessTimerSubscription!: Subscription;
  private peerToPeerSubscription!: Subscription;

  @ViewChild('chess') private ngxChessgroundComponent!: NgxChessgroundComponent;

  private cg!: Api;
  shortcuts: ShortcutInput[] = [];

  constructor(
    private chessTimerService: ChessTimerService,
    private chessStatusService: ChessStatusService,
    private peerToPeerService: PeerToPeerService,
    private sharedDataService: SharedDataService,
    private audioService: AudioService,
    private chessTimeoutService: ChessTimeoutService,
    private commandService: CommandService
  ) {
    this.isSinglePlayer = !this.peerToPeerService.isConnected;
    this.myTeam = this.chessStatusService.playersTurnInfo.getTeam(this.peerToPeerService.getId());
  }

  ngOnInit() {
    this.updateMoveHandlerResolver();
    this.historicalMoveNumber = 0;
  }

  ngAfterViewInit(): void {
    this.ngxChessgroundComponent.runFn = this.run.bind(this);

    this.chessTimerSubscription = this.chessTimeoutService.getTimeoutObservable().subscribe(color => {
      this.chessStatusService.setTimeout(color);
      this.onGameOver();
    });

    this.peerToPeerSubscription = this.peerToPeerService.messageSubject.subscribe(message => {
      if (message.data.command === 'MOVE') {
        if (message.data.matchId !== this.sharedDataService.getSharedDataSync().matchCount) {
          return;
        }
        this.processMoveFromExternal({
          from: message.data.from,
          to: message.data.to,
          promotion: message.data.promotion
        }, message.data.claimedTime);
      }
      else if (message.data.command === 'DECLARE_TIMEOUT') {
        if (message.data.matchId !== this.sharedDataService.getSharedDataSync().matchCount) {
          return;
        }
        this.chessStatusService.setTimeout(message.data.color);
      }
      else if (message.data.command === 'RESIGN') {
        if (message.data.matchId !== this.sharedDataService.getSharedDataSync().matchCount) {
          return;
        }
        this.chessStatusService.resign(message.data.team);
        this.onGameOver();
      }
    });

    this.shortcuts.push(
      {
        key: 'ctrl + shift + r',
        preventDefault: true,
        command: e => this.commandService.resign(this.myTeam)
      },
    );
  }

  ngAfterContentInit() {
    this.setupTimer();
  }

  ngOnDestroy() {
    this.cg.destroy();
    this.chessTimerSubscription.unsubscribe();
    this.peerToPeerSubscription.unsubscribe();
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      this.navigatePosition(-1);
    }

    if (event.key === 'ArrowRight') {
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

    const sharedData = this.sharedDataService.getSharedDataSync();
    if (sharedData.startFen) {
      this.setFen(sharedData.startFen);
    }

    this.cg.set({
      animation: { enabled: true },
      events: { move: (orig, dest) => this.cgMoveHandler(orig, dest, 'q') },
    });

    if (this.myTeam === 'black') {
      this.cg.toggleOrientation();
    }

    this.setupDebug();
    this.getAndApplyCPUMove();
    this.setBoardMouseEvents();

    return this.cg;
  }

  private setupTimer() {
    const sharedData = this.sharedDataService.getSharedDataSync();
    const timerSettings = sharedData.timerSettings;
    this.chessTimerService.setupTimer(timerSettings, this.chessStatusService.getColor());
  }

  private setupDebug() {
    const anyWindow = window as any;
    anyWindow.cg = this.cg;
    anyWindow.chess = this.chessStatusService.chess;
  }

  private setFen(fen: string) {
    this.cg.set({fen});
    this.chessStatusService.setFen(fen);
  }

  exposedMoveHandler(from: Key, to: Key) {
    return this.cgMoveHandler(from, to);
  }

  private cgMoveHandler(from: Key, to: Key, promotion?: Exclude<ChessJS.PieceType, 'p'>) {
    this.movePieceWithEnPassantAndPromotion({from, to, promotion});

    this.chessTimerService.setTurn(this.chessStatusService.getColor());
    if (this.chessStatusService.getNumMoves() === 2) {
      this.chessTimerService.startTimer();
    }
    if (this.chessStatusService.getNumMoves() >= 2) {
      this.chessTimerService.unpauseTimer();
    }
    this.chessTimeoutService.cancelHostTimeoutDeclaration();
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
        from: move.from,
        to: move.to,
        matchId: this.sharedDataService.getSharedDataSync().matchCount,
        promotion: move.promotion,
        claimedTime: this.chessTimerService.getCurrentTime()
      });
    }

    const resMove = this.chessStatusService.move(move);

    promoteIfNecessary(resMove!, this.cg, oldColor);
    removeEnPassantIfNecessary(resMove!, this.cg);

    this.playMoveSound(resMove!.captured != null);
    this.cg.set({
      check: this.chessStatusService.chess.in_check() ? this.chessStatusService.getColor() : undefined,
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
    OnePlayerBoardChanger.setUnmovable(this.cg);
    this.audioService.genericNotify.play();
    this.chessTimerService.pauseTimer();
  }

  private setBoardMouseEvents() {
    if (this.chessStatusService.isGameOver()) {
      return OnePlayerBoardChanger.setUnmovable(this.cg);
    }
    if (this.chessStatusService.isPlayersMove(this.peerToPeerService.getId())) {
      return this.setBoardMouseEventMovable();
    }
    if (this.chessStatusService.isPlayersMoveNext(this.peerToPeerService.getId())) {
      return OnePlayerBoardChanger.setPremovable(this.chessStatusService.chess, this.cg);
    }
    return OnePlayerBoardChanger.setUnmovable(this.cg);
  }

  private setBoardMouseEventMovable() {
    if (this.chessStatusService.isGameOver()) {
      return OnePlayerBoardChanger.setUnmovable(this.cg);
    }
    return OnePlayerBoardChanger.setMovable(this.chessStatusService.chess, this.cg);
  }

  private async getAndApplyCPUMove() {
    const move = await this.moveHandlerResolver.getMoveHander(this.chessStatusService.getNumMovesConsideringIfBlackWentFirst()).getMove(this.chessStatusService.chess);
    if (this.chessStatusService.isGameOver()) return;
    if (move != null) {
      console.log('APPLY CPU MOVE');
      this.processMoveFromExternal(move);
    }
  }

  private processMoveFromExternal(move: ChessJS.ShortMove, claimedTime?: number) {
    if (claimedTime !== undefined) {
      this.chessTimerService.setTimeForCurrentTurn(claimedTime);
      this.chessTimerService.pauseTimer();
    }
    this.resetHistoryIfRequired();
    this.cg.move(move.from, move.to);
  }

  private navigatePosition(offset: number) {
    if (offset < 0 && this.historicalMoveNumber + offset >= 0) {
      this.historicalMoveNumber += offset;
      this.setCgForHistoricalMove(this.historicalMoveNumber, true);
      OnePlayerBoardChanger.setUnmovable(this.cg);
    }
    else if (offset > 0 && this.historicalMoveNumber + offset <= this.chessStatusService.getNumMoves()) {
      this.historicalMoveNumber += offset;
      this.setCgForHistoricalMove(this.historicalMoveNumber);
      if (this.historicalMoveNumber === this.chessStatusService.getNumMoves()) {
        this.setBoardMouseEventMovable();
      }
    }
  }

  private setCgForHistoricalMove(moveNumber: number, movingBackward: boolean = false) {
    const fen = this.chessStatusService.getFenForMove(moveNumber);
    this.cg.set({fen});
    if (moveNumber === 0) {
      this.cg.set({lastMove: undefined});
    } else {
      const lastMove = this.chessStatusService.getPreviousMoveForMove(moveNumber);
      this.cg.set({
        lastMove: [lastMove.from, lastMove.to],
        highlight: {lastMove: true},
      });
    }
    this.cg.set({
      check: this.chessStatusService.isInCheck(moveNumber) ? this.chessStatusService.getColor() : false
    });
    this.playSoundForMoveNumber(moveNumber + (movingBackward ? 1 : 0));
  }

  private playSoundForMoveNumber(moveNumber: number) {
    if (moveNumber <= 0) return;
    const lastMove = this.chessStatusService.getPreviousMoveForMove(moveNumber);
    this.playMoveSound(lastMove.captured != null);
  }

  private resetHistoryIfRequired() {
    if (this.historicalMoveNumber !== this.chessStatusService.getNumMoves()) {
      this.historicalMoveNumber = this.chessStatusService.getNumMoves();
      const oldAnimation = this.cg.state.animation.enabled;
      this.cg.set({animation: {enabled: false}});
      this.cg.set({fen: this.chessStatusService.getFenForMove(this.historicalMoveNumber)});
      this.cg.set({animation: {enabled: oldAnimation}});
    }
  }

  private updateMoveHandlerResolver() {
    const whiteTeamDict = this.sharedDataService.getNamesSync('white');
    const blackTeamDict = this.sharedDataService.getNamesSync('black');
    return this.moveHandlerResolver = new MoveHandlerResolver(whiteTeamDict, blackTeamDict);
  }
}
