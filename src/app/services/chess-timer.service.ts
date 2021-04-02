import { Injectable, OnDestroy } from '@angular/core';
import { Color } from 'chessground/types';
import { BehaviorSubject, Subject, Subscription, timer } from 'rxjs';
import { ITimerSettings } from '../shared/peer-to-peer/shared-data';

interface ITimerState {
  turn: Color;
  msWhenLastChanged: number;
}

@Injectable()
export class ChessTimerService implements OnDestroy {
  timeout: Subject<Color> = new Subject();

  private timers = {
    white: new BehaviorSubject(10),
    black: new BehaviorSubject(10)
  };

  private timerState: ITimerState = {
    turn: 'white',
    msWhenLastChanged: -1
  };

  private paused = false;
  private myTimer = timer(33, -1);
  private whiteIncrement = 0;
  private blackIncrement = 0;
  private myTimerSubscription?: Subscription;

  constructor() {
  }

  ngOnDestroy() {
    this.destroyTimerIfExists();
  }

  getTimerObservable(color: Color) {
    return this.timers[color].asObservable();
  }

  getTimeoutObservable() {
    return this.timeout.asObservable();
  }

  getCurrentTime() {
    return this.timers[this.timerState.turn].getValue();
  }

  private setStartingTime(totalTimeSeconds: number, startingTurn: Color = 'white', whiteIncrement = 20*1000, blackIncrement = 0) {
    console.log("set starting time", totalTimeSeconds, startingTurn);
    this.timers['white'].next(totalTimeSeconds);
    this.timers['black'].next(totalTimeSeconds);
    this.timerState.turn = startingTurn;
    this.whiteIncrement = whiteIncrement;
    this.blackIncrement = blackIncrement;
  }

  setupTimer(timerSettings: ITimerSettings, startingColor: Color) {
    if (!timerSettings.asymmetric) {
      this.setStartingTime(timerSettings.whiteTime!, startingColor,
        timerSettings.whiteIncrement!,
        timerSettings.whiteIncrement!);
    } else {
      this.setStartingTime(timerSettings.whiteTime!, startingColor,
        timerSettings.whiteIncrement!,
        timerSettings.blackIncrement!);
    }
  }

  startTimer() {
    this.timerState.msWhenLastChanged = Date.now();
    this.destroyTimerIfExists();
    this.myTimerSubscription = this.myTimer.subscribe(t => {
      if (this.paused) return;
      const currentMs = Date.now();
      const diff = currentMs - this.timerState.msWhenLastChanged;

      const timerBehaviourSubject = this.timers[this.timerState.turn];
      if (timerBehaviourSubject.getValue() !== 0) {
        timerBehaviourSubject.next(Math.max(0, timerBehaviourSubject.getValue() - diff / 1000));
        if (timerBehaviourSubject.getValue() === 0) {
          this.timeout.next(this.timerState.turn);
        }
      }

      this.timerState.msWhenLastChanged = currentMs;
    })
  }

  setTimeForCurrentTurn(time: number) {
    const timerBehaviourSubject = this.timers[this.timerState.turn];
    timerBehaviourSubject.next(time);
    this.timerState.msWhenLastChanged = Date.now();
  }

  pauseTimer() {
    this.paused = true;
  }

  setTurn(turn: Color) {
    if (turn == this.timerState.turn) return;
    this.incrementTimerForCurrentTurn(this.timerState.turn === 'white' ? this.whiteIncrement : this.blackIncrement);
    this.timerState.turn = turn;
  }

  private destroyTimerIfExists() {
    this.myTimerSubscription?.unsubscribe();
  }

  private incrementTimerForCurrentTurn(ms: number) {
    const color = this.timerState.turn;
    this.setTimeForCurrentTurn(this.timers[color].getValue() + ms);
  }
}
