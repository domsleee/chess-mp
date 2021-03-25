import { Injectable } from '@angular/core';
import * as ChessJS from 'chess.js';
import { Color } from 'chessground/types';
import { BehaviorSubject } from 'rxjs';
import { IPlayerTeam } from '../components/chess-board/helpers/PlayerTeamHelper';
import { toColor } from '../shared/util/play';
import { PlayersTurnInfo } from '../shared/util/PlayersTurnInfo';
import { SharedDataService } from './shared-data.service';
export const Chess = typeof ChessJS === 'function' ? ChessJS : ChessJS.Chess;

@Injectable()
export class ChessStatusService {
  currentStatus = new BehaviorSubject<string>('');
  currentTurn = new BehaviorSubject<[string, IPlayerTeam|null]>(['', null]);
  previousTurn = new BehaviorSubject<[string, IPlayerTeam|null]>(['', null]);
  nextTurn = new BehaviorSubject<[string, IPlayerTeam|null]>(['', null]);

  private moveToFen: {[key: number]: string} = {};
  private moveToPreviousMove: {[key: number]: ChessJS.Move} = {};

  chess: ChessJS.ChessInstance;
  playersTurnInfo: PlayersTurnInfo;

  constructor(private sharedDataService: SharedDataService) {
    this.chess = new Chess();
    this.playersTurnInfo = new PlayersTurnInfo(this.sharedDataService.names.getValue());
    this.sharedDataService.newName.subscribe(() => {
      this.playersTurnInfo = new PlayersTurnInfo(this.sharedDataService.names.getValue());
    });
    this.updateCurrentTurn();
    this.updateMoveForFen();
  }

  move(move: string | ChessJS.ShortMove): ChessJS.Move | null {
    const res = this.chess.move(move);
    this.updateStatusFromGame(this.chess);
    this.updateCurrentTurn();
    this.updateMoveForFen(res!);
    return res;
  }

  getColor() {
    return toColor(this.chess);
  }

  setFen(fen: string) {
    this.chess = new Chess(fen);
    this.updateMoveForFen();
  }

  getFenForMove(moveNumber: number) {
    return this.moveToFen[moveNumber];
  }

  getPreviousMoveForMove(moveNumber: number) {
    return this.moveToPreviousMove[moveNumber];
  }

  private updateMoveForFen(move?: ChessJS.Move) {
    this.moveToFen[this.getNumMoves()] = this.chess.fen();
    if (move) {
      this.moveToPreviousMove[this.getNumMoves()] = move;
    }
  }

  private updateCurrentTurn() {
    console.log(this.playersTurnInfo.getPlayer(this.getNumMoves()));
    this.previousTurn.next(this.currentTurn.getValue());
    this.currentTurn.next(this.getTupleForMoveNumber(this.getNumMoves()));
    this.nextTurn.next(this.getTupleForMoveNumber(this.getNumMoves() + 1));
  }

  private getTupleForMoveNumber(moveNumber: number): [string, IPlayerTeam] {
    const playerId = this.playersTurnInfo.getPlayer(moveNumber);
    const playerTeamDict = this.sharedDataService.names.getValue()[playerId] || null;
    return [playerId, playerTeamDict];
  }

  private updateStatusFromGame(chess: ChessJS.ChessInstance) {
    if (chess.in_stalemate()) {
      this.currentStatus.next('stalemate');
    } else if (chess.in_checkmate()) {
      this.currentStatus.next('checkmate');
    } else if (chess.in_draw()) {
      this.currentStatus.next('draw');
    }
  }

  isGameOver() {
    return this.currentStatus.getValue() != '';
  }

  setTimeout(color: Color) {
    this.currentStatus.next(`timeout ${color}`);
  }

  getNumMoves() {
    return this.chess.history().length;
  }

  isPlayersMove(playersId: string) {
    return this.playersTurnInfo.isPlayersTurn(this.getNumMoves(), playersId)
  }

  didMoveBelongToPlayer(playersId: string) {
    return this.playersTurnInfo.didMoveBelongToPlayer(this.getNumMoves(), playersId)
  }

  isPlayersMoveNext(playersId: string) {
    return this.playersTurnInfo.isPlayersTurnNext(this.getNumMoves(), playersId);
  }
}