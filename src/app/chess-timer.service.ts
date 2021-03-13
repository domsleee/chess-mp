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
  whiteTime: BehaviorSubject<number> = new BehaviorSubject(10);
  blackTime: BehaviorSubject<number> = new BehaviorSubject(10);
  timeout: Subject<Color> = new Subject();

  private timerState: ITimerState = {
    turn: 'white',
    msWhenLastChanged: -1
  };

  private paused = false;
  private myTimer = timer(10, -1);

  public setStartingTime(totalTimeSeconds: number, startingTurn: Color = 'white') {
    this.whiteTime.next(totalTimeSeconds);
    this.blackTime.next(totalTimeSeconds);
    this.timerState.turn = startingTurn;
  }

  public startTimer() {
    this.timerState.msWhenLastChanged = Date.now();
    this.myTimer.subscribe(t => {
      if (this.paused) return;
      const currentMs = Date.now();
      const diff = currentMs - this.timerState.msWhenLastChanged;

      if (this.timerState.turn == 'white') {
        this.whiteTime.next(Math.max(0, this.whiteTime.getValue() - diff / 1000));
        if (this.whiteTime.getValue() == 0) {
          this.timeout.next('white');
        }
      } else {
        this.blackTime.next(Math.max(0, this.blackTime.getValue() - diff / 1000));
        if (this.blackTime.getValue() == 0) {
          this.timeout.next('black');
        }
      }
      this.timerState.msWhenLastChanged = currentMs;
    })
  }

  public pauseTimer() {
    this.paused = true;
  }

  public setTurn(turn: Color) {
    this.timerState.turn = turn;
  }
}
