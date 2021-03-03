import { Component, Input, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { ChessTimerFormatPipe } from '../chess-timer-format.pipe';
import { ChessTimerService } from '../chess-timer.service';

@Component({
  selector: 'app-chess-timer',
  templateUrl: './chess-timer.component.html',
  styleUrls: ['./chess-timer.component.scss'],
  providers: [ChessTimerFormatPipe]
})
export class ChessTimerComponent {
  constructor(private chessTimerService: ChessTimerService) { }

  getTime1 = () => this.chessTimerService.time1;
  getTime2 = () => this.chessTimerService.time2;

}
