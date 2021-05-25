import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxChessgroundModule } from 'ngx-chessground';
import { APP_BASE_HREF, PlatformLocation } from '@angular/common';
import { ChessBoardComponent } from './components/chess-board/chess-board.component';
import { MpLobbyComponent } from './pages/mp-lobby/mp-lobby.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LoadingButtonComponent } from './components/loading-button/loading-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { JoinComponent } from './pages/join/join.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatExpansionModule } from '@angular/material/expansion';
import { TeamSelectionPanelComponent } from './shared/mp-lobby/team-selection-panel/team-selection-panel.component';
import { PlayerConfigComponent } from './shared/mp-lobby/player-config/player-config.component';
import { SnapSliderComponent } from './components/snap-slider/snap-slider.component';
import { TimerConfigComponent } from './components/timer-config/timer-config.component';
import { ChessTimerFormatPipe } from './pipes/chess-timer-format.pipe';
import { ChessTimerComponent } from './components/chess-timer/chess-timer.component';
import { ReplaceNullWithEmptyPipe } from './pipes/replace-null-with-empty.pipe';
import { AnalyseButtonComponent } from './components/analyse-button/analyse-button.component';
import { HttpClientModule } from '@angular/common/http';
import { ChessBoardContainerComponent } from './components/chess-board-container/chess-board-container.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RematchButtonComponent } from './components/rematch-button/rematch-button.component';
import { TextareaSelectallComponent } from './components/textarea-selectall/textarea-selectall.component';
import { EditableSpanComponent } from './components/editable-span/editable-span.component';
import { PanelHeaderDisableEventsDirective } from './directives/panel-header-disable-events.directive';
import { ReactiveComponentModule } from '@ngrx/component';
import { HistoryComponent } from './pages/history/history.component';

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
    AnalyseButtonComponent,
    ChessBoardContainerComponent,
    RematchButtonComponent,
    TextareaSelectallComponent,
    EditableSpanComponent,
    PanelHeaderDisableEventsDirective,
    HistoryComponent
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
    HttpClientModule,
    MatProgressSpinnerModule,
    MatIconModule,
    ReactiveComponentModule
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useFactory: (s: PlatformLocation) => s.getBaseHrefFromDOM(),
      deps: [PlatformLocation]
    }
    // {provide: APP_BASE_HREF, useValue: '/chess-mp/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
