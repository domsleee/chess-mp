import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxChessgroundModule } from 'ngx-chessground';
import {APP_BASE_HREF} from '@angular/common';
import { ChessBoardComponent } from './chess-board/chess-board.component';
import { ChessTimerComponent } from './chess-timer/chess-timer.component';
import { ChessTimerFormatPipe } from './chess-timer-format.pipe';
import { MpLobbyComponent } from './pages/mp-lobby/mp-lobby.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';

import { MatButtonModule } from '@angular/material/button';
import { LoadingButtonComponent } from './loading-button/loading-button.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { JoinComponent } from './pages/join/join.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [
    AppComponent,
    ChessBoardComponent,
    ChessTimerComponent,
    ChessTimerFormatPipe,
    MpLobbyComponent,

    HomeComponent,
    LoadingButtonComponent,
    JoinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChessgroundModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatGridListModule
    
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
