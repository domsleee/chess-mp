import { Injectable } from '@angular/core';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChessTimerService {

  timerState = {
    turn: 0,
    msWhenLastChanged: -1
  };
  time1: number = 10;
  time2: number = 10;

  totalTimeSeconds: number = 60;

  myTimer = timer(10, -1);

  public setStartingTime(totalTimeSeconds: number, startingTurn: number = 1) {
    this.time1 = this.totalTimeSeconds;
    this.time2 = this.totalTimeSeconds;
    this.timerState.turn = startingTurn;
  }

  public startTimer() {
    this.timerState.msWhenLastChanged = Date.now();
    this.myTimer.subscribe(t => {
      const currentMs = Date.now();
      const diff = currentMs - this.timerState.msWhenLastChanged;

      if (this.timerState.turn == 0) {
        this.time1 -= diff/1000;
        this.time1 = Math.max(0, this.time1);
      } else {
        this.time2 -= diff/1000;
        this.time2 = Math.max(0, this.time2);

      }
      this.timerState.msWhenLastChanged = currentMs;
    })
  }

  public setTurn(turn: 0|1) {
    this.timerState.turn = turn;
  }
}
