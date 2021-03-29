import { Component, Input, OnInit } from '@angular/core';
import { Color } from 'chessground/types';
import { Observable } from 'rxjs';
import { IPlayerTeam, PlayerTeamDict } from 'src/app/components/chess-board/helpers/PlayerTeamHelper';
import { SharedDataService } from 'src/app/services/shared-data.service';

const debug = console.log;

@Component({
  selector: 'app-team-selection-panel',
  templateUrl: './team-selection-panel.component.html',
  styleUrls: ['./team-selection-panel.component.scss']
})
export class TeamSelectionPanelComponent implements OnInit {
  @Input() team: Color = 'white';
  teamDict$!: Observable<PlayerTeamDict>;

  constructor(private sharedDataService: SharedDataService) {
  }

  ngOnInit(): void {
    debug("team selection init...");
    this.teamDict$ = this.sharedDataService.getNameObservable(this.team);
  }

  onDestroy() {
    debug("panel destroyed...");
  }

  trackByFn(index: number, entry: {key: string, value: IPlayerTeam}): string {
    return entry.key;
  }

  setTeam() {
    this.sharedDataService.setTeam(this.team);
  }

  addCPU() {
    this.sharedDataService.addCPU(this.team);
  }

}
