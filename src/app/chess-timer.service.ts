import { Injectable } from '@angular/core';
import { Color } from 'chessground/types';
import { BehaviorSubject, Subject, timer } from 'rxjs';

interface ITimerState {
  turn: Color,
  msWhenLastChanged: number
};

@Injectable({
  providedIn: 'root'
})
export class ChessTimerService {

  timerState: ITimerState = {
    turn: 'white',
    msWhenLastChanged: -1
  };
  time1: BehaviorSubject<number> = new BehaviorSubject(10);
  time2: BehaviorSubject<number> = new BehaviorSubject(10);

  totalTimeSeconds: number = 60;

  myTimer = timer(10, -1);

  public setStartingTime(totalTimeSeconds: number, startingTurn: Color = 'white') {
    this.time1.next(this.totalTimeSeconds);
    this.time2.next(this.totalTimeSeconds);
    this.timerState.turn = startingTurn;
  }

  public startTimer() {
    this.timerState.msWhenLastChanged = Date.now();
    this.myTimer.subscribe(t => {
      const currentMs = Date.now();
      const diff = currentMs - this.timerState.msWhenLastChanged;

      if (this.timerState.turn == 'white') {
        this.time1.next(Math.max(0, this.time1.getValue() - diff / 1000));
      } else {
        this.time2.next(Math.max(0, this.time2.getValue() - diff / 1000));
      }
      this.timerState.msWhenLastChanged = currentMs;
    })
  }

  public setTurn(turn: Color) {
    this.timerState.turn = turn;
  }
}
