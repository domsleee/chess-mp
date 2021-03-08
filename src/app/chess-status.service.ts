import { Injectable } from '@angular/core';
import * as ChessJS from 'chess.js';
import { Color } from 'chessground/types';
import { BehaviorSubject } from 'rxjs';
export const Chess = typeof ChessJS === 'function' ? ChessJS : ChessJS.Chess;

@Injectable({
  providedIn: 'root'
})
export class ChessStatusService {
  currentStatus = new BehaviorSubject<string>('');

  constructor() { }

  updateStatusFromGame(chess: ChessJS.ChessInstance) {
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
}
