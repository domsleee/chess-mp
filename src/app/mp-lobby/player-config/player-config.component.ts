import { Component, Input, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { Observable } from 'rxjs';
import { IPlayerTeam } from 'src/app/chess-board/helpers/PlayerTeamHelper';
import { PlayerCollectorService } from 'src/app/player-collector.service';

@Component({
  selector: 'app-player-config',
  templateUrl: './player-config.component.html',
  styleUrls: ['./player-config.component.scss']
})
export class PlayerConfigComponent implements OnInit {
  @Input() playerId: string = '';
  @Input() player: IPlayerTeam | null = null;

  _myValue: number = 0;
  constructor(private playerCollectorService: PlayerCollectorService) { }

  ngOnInit(): void {
    console.log("playerconfig init...");
    this.myValue = this.player?.engineSettings?.timeForMove ?? 0;
    //this.player$ = this.playerCollectorService.getPlayer(this.playerId);
  }

  ngOnChanges() {
    this.myValue = this.player?.engineSettings?.timeForMove ?? 0;
  }

  get myValue() {
    return this._myValue;
  }

  set myValue(value: number) {
    this._myValue = Math.round(value/100)*100;
  }

  setTimeForMove(e: MatSliderChange) {
    const value = this.myValue;//e.value ?? 0;
    console.log(`setTimeForMove: ${value}`);
    this.playerCollectorService.setEngineSettings(this.playerId, {timeForMove: value});
  }
}
