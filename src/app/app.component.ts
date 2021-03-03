import { Component, ViewChild } from '@angular/core';
import { NgxChessgroundComponent } from 'ngx-chessground';
import { initial } from './util/play';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chess-mp';
}
