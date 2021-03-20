import { Component, Input, OnInit } from '@angular/core';
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
  
  updateTimeForMove = (val: number) => this.playerCollectorService.setEngineSettings(this.playerId, {timeForMove: val});
  updateElo = (val: number) => this.playerCollectorService.setEngineSettings(this.playerId, {elo: val});
  roundTo100 = (val: number) => Math.round(val/100) * 100;
  roundTo50 = (val: number) => Math.round(val/50) * 50;

  constructor(private playerCollectorService: PlayerCollectorService) { }

  ngOnInit(): void {
    console.log("playerconfig init...");
    //this.player$ = this.playerCollectorService.getPlayer(this.playerId);
  }
}
