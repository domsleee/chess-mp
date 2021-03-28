import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxChessgroundModule } from 'ngx-chessground';
import {APP_BASE_HREF} from '@angular/common';
import { ChessBoardComponent } from './components/chess-board/chess-board.component';
import { MpLobbyComponent } from './pages/mp-lobby/mp-lobby.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';

import { MatButtonModule } from '@angular/material/button';
import { LoadingButtonComponent } from './components/loading-button/loading-button.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { JoinComponent } from './pages/join/join.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import { PlayerListComponent } from './components/player-list/player-list.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import { TeamSelectionPanelComponent } from './shared/mp-lobby/team-selection-panel/team-selection-panel.component';
import { PlayerConfigComponent } from './shared/mp-lobby/player-config/player-config.component';
import { SnapSliderComponent } from './components/snap-slider/snap-slider.component';
import { TimerConfigComponent } from './components/timer-config/timer-config.component';
import { ChessTimerFormatPipe } from './services/chess-timer-format.pipe';
import { ChessTimerComponent } from './components/chess-timer/chess-timer.component';
import { ReplaceNullWithEmptyPipe } from './pipes/replace-null-with-empty.pipe';
import { AnalyseButtonComponent } from './components/analyse-button/analyse-button.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    ChessBoardComponent,
    ChessTimerComponent,
    ChessTimerFormatPipe,
    MpLobbyComponent,

    HomeComponent,
    LoadingButtonComponent,
    JoinComponent,
    PlayerListComponent,
    ReplaceNullWithEmptyPipe,
    TeamSelectionPanelComponent,
    PlayerConfigComponent,
    SnapSliderComponent,
    TimerConfigComponent,
    AnalyseButtonComponent
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
    MatGridListModule,
    MatSliderModule,
    MatExpansionModule,
    MatCardModule,
    HttpClientModule

  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
