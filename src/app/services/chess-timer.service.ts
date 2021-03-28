import { Injectable } from '@angular/core';
import { Color } from 'chessground/types';
import { BehaviorSubject, Subject, timer } from 'rxjs';
import { ITimerSettings } from '../shared/peer-to-peer/shared-data';

interface ITimerState {
  turn: Color;
  msWhenLastChanged: number;
}

@Injectable({
  providedIn: 'root'
})
export class ChessTimerService {
  whiteTime: BehaviorSubject<number>;
  blackTime: BehaviorSubject<number>;
  timers = {
    white: new BehaviorSubject(10),
    black: new BehaviorSubject(10)
  };
  timeout: Subject<Color> = new Subject();

  private timerState: ITimerState = {
    turn: 'white',
    msWhenLastChanged: -1
  };

  constructor() {
    this.whiteTime = this.timers.white;
    this.blackTime = this.timers.black;
  }

  private paused = false;
  private myTimer = timer(10, -1);
  private whiteIncrement = 0;
  private blackIncrement = 0;

  public setStartingTime(totalTimeSeconds: number, startingTurn: Color = 'white', whiteIncrement = 20*1000, blackIncrement = 0) {
    console.log("set starting time", totalTimeSeconds);
    this.whiteTime.next(totalTimeSeconds);
    this.blackTime.next(totalTimeSeconds);
    this.timerState.turn = startingTurn;
    this.whiteIncrement = whiteIncrement;
    this.blackIncrement = blackIncrement;
  }

  public setupTimer(timerSettings: ITimerSettings) {
    if (!timerSettings.asymmetric) {
      this.setStartingTime(timerSettings.whiteTime!, 'white',
        timerSettings.whiteIncrement!,
        timerSettings.whiteIncrement!);
    } else {
      this.setStartingTime(timerSettings.whiteTime!, 'white',
        timerSettings.whiteIncrement!,
        timerSettings.blackIncrement!);
    }
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
    if (turn == this.timerState.turn) return;
    this.incrementTimer(this.timerState.turn, this.timerState.turn == 'white' ? this.whiteIncrement : this.blackIncrement);
    this.timerState.turn = turn;
  }

  private incrementTimer(color: Color, ms: number) {
    this.timers[color].next(this.timers[color].getValue() + ms);
  }
}
