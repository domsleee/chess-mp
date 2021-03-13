import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { ChessStatusService } from '../chess-status.service';
import { ChessTimerFormatPipe } from '../chess-timer-format.pipe';
import { ChessTimerService } from '../chess-timer.service';


@Component({
  selector: 'app-chess-timer',
  templateUrl: './chess-timer.component.html',
  styleUrls: ['./chess-timer.component.scss'],
  providers: [ChessTimerFormatPipe]
})
export class ChessTimerComponent {
  whiteTime: BehaviorSubject<number>;
  blackTime: BehaviorSubject<number>;
  currentStatus: BehaviorSubject<string>;

  @Input() inverted: boolean = false;
  flexDirection = 'column';

  constructor(private chessTimerService: ChessTimerService,
    private ChessStatusService: ChessStatusService) {
    this.whiteTime = this.chessTimerService.whiteTime;
    this.blackTime = this.chessTimerService.blackTime;
    this.currentStatus = this.ChessStatusService.currentStatus;
    console.log("INVERTED", this.inverted);
  }

  ngOnInit() {
    console.log("INVERTED??", this.inverted);
    this.flexDirection = !this.inverted ? 'column' : 'column-reverse';
  }
}
