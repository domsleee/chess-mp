import { Component, Input, OnInit } from '@angular/core';
import { Color } from 'chessground/types';
import { Observable } from 'rxjs';
import { Key } from 'selenium-webdriver';
import { IPlayerTeam, PlayerTeamDict } from 'src/app/chess-board/helpers/PlayerTeamHelper';
import { SharedDataService } from 'src/app/shared-data.service';

@Component({
  selector: 'app-team-selection-panel',
  templateUrl: './team-selection-panel.component.html',
  styleUrls: ['./team-selection-panel.component.scss']
})
export class TeamSelectionPanelComponent implements OnInit {
  @Input() team: Color = 'white';
  teamDict$: Observable<PlayerTeamDict>;

  constructor(private sharedDataService: SharedDataService) {
    this.teamDict$ = this.team == 'white' ? this.sharedDataService.whiteNames : this.sharedDataService.blackNames;
  }

  ngOnInit(): void {
    console.log("team selection init...");
    this.teamDict$ = this.team == 'white' ? this.sharedDataService.whiteNames : this.sharedDataService.blackNames;
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
    this.sharedDataService.setTeam(this.team);
  }

  addCPU() {
    this.sharedDataService.addCPU(this.team);
  }

}
