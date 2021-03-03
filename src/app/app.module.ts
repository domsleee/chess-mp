import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxChessgroundModule } from 'ngx-chessground';
import {APP_BASE_HREF} from '@angular/common';
import { ChessBoardComponent } from './chess-board/chess-board.component';
import { ChessTimerComponent } from './chess-timer/chess-timer.component';
import { ChessTimerFormatPipe } from './chess-timer-format.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ChessBoardComponent,
    ChessTimerComponent,
    ChessTimerFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChessgroundModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
