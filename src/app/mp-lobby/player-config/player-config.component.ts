import { Component, Input, OnInit } from '@angular/core';
import { IPlayerTeam } from 'src/app/chess-board/helpers/PlayerTeamHelper';
import { SharedDataService } from 'src/app/shared-data.service';

@Component({
  selector: 'app-player-config',
  templateUrl: './player-config.component.html',
  styleUrls: ['./player-config.component.scss']
})
export class PlayerConfigComponent implements OnInit {
  @Input() playerId: string = '';
  @Input() player: IPlayerTeam | null = null;
  
  updateTimeForMove = (val: number) => this.sharedDataService.setEngineSettings(this.playerId, {timeForMove: val});
  updateElo = (val: number) => this.sharedDataService.setEngineSettings(this.playerId, {elo: val});
  roundTo100 = (val: number) => Math.round(val/100) * 100;
  roundTo50 = (val: number) => Math.round(val/50) * 50;

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit(): void {
  }
}
