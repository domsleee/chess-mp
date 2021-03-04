import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { ChessTimerFormatPipe } from '../chess-timer-format.pipe';
import { ChessTimerService } from '../chess-timer.service';

@Component({
  selector: 'app-chess-timer',
  templateUrl: './chess-timer.component.html',
  styleUrls: ['./chess-timer.component.scss'],
  providers: [ChessTimerFormatPipe]
})
export class ChessTimerComponent {
  time1: BehaviorSubject<number>;
  time2: BehaviorSubject<number>;

  constructor(private chessTimerService: ChessTimerService) {
    this.time1 = this.chessTimerService.time1;
    this.time2 = this.chessTimerService.time2;
  }



}
