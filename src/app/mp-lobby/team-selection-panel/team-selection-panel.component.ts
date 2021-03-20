import { Component, Input, OnInit } from '@angular/core';
import { Color } from 'chessground/types';
import { Observable } from 'rxjs';
import { Key } from 'selenium-webdriver';
import { IPlayerTeam, PlayerTeamDict } from 'src/app/chess-board/helpers/PlayerTeamHelper';
import { PlayerCollectorService } from 'src/app/player-collector.service';

@Component({
  selector: 'app-team-selection-panel',
  templateUrl: './team-selection-panel.component.html',
  styleUrls: ['./team-selection-panel.component.scss']
})
export class TeamSelectionPanelComponent implements OnInit {
  @Input() team: Color = 'white';
  teamDict$: Observable<PlayerTeamDict>;

  constructor(private playerCollectorService: PlayerCollectorService) {
    this.teamDict$ = this.team == 'white' ? this.playerCollectorService.whiteNames : this.playerCollectorService.blackNames;
  }

  ngOnInit(): void {
    console.log("team selection init...");
    this.teamDict$ = this.team == 'white' ? this.playerCollectorService.whiteNames : this.playerCollectorService.blackNames;
  }

  onDestroy() {
    console.log("panel destroyed...");
  }

  trackByFn(index: number, entry: {key: string, value: IPlayerTeam}): string {
    return entry.key;
  }


  ngOnChanges() {
    console.log("CHANGES??");
  }

  setTeam() {
    this.playerCollectorService.setTeam(this.team);
  }

  addCPU() {
    this.playerCollectorService.addCPU(this.team);
  }

}
