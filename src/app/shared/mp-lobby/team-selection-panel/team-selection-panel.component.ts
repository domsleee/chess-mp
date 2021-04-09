import { Component, HostListener, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatExpansionPanelHeader } from '@angular/material/expansion';
import { Color } from 'chessground/types';
import { Observable, Subscription } from 'rxjs';
import { getSortedTeamKeys, IPlayerTeam, PlayerTeamDict } from 'src/app/components/chess-board/helpers/PlayerTeamHelper';
import { SharedDataService } from 'src/app/services/shared-data.service';


const debug = console.log;

@Component({
  selector: 'app-team-selection-panel',
  templateUrl: './team-selection-panel.component.html',
  styleUrls: ['./team-selection-panel.component.scss']
})
export class TeamSelectionPanelComponent implements OnInit, OnDestroy {
  @Input() team: Color = 'white';
  teamDict!: PlayerTeamDict;
  teamDictSubscription!: Subscription;
  sortedKeys!: string[];

  setSortNumberFns: {[n: string]: (n: number) => void} = {};


  constructor(private sharedDataService: SharedDataService) {
  }

  ngOnInit(): void {
    debug("team selection init...");
    this.teamDictSubscription = this.sharedDataService.getNameObservable(this.team).subscribe(t => {
      this.teamDict = t;
      this.sortedKeys = getSortedTeamKeys(this.teamDict);
      console.log("sortedKeys", this.sortedKeys);

      for (const key of Object.keys(this.teamDict)) {
        this.setSortNumberFns[key] = (n: number) => {
          console.log("setSortNumberFns", key, n);
          this.sharedDataService.setSortNumber(key, n);
        }
      }
    })
  }

  ngOnDestroy() {
    this.teamDictSubscription.unsubscribe();
  }

  onDestroy() {
    debug("panel destroyed...");
  }

  setTeam() {
    this.sharedDataService.setTeam(this.team);
  }

  addCPU() {
    this.sharedDataService.addCPU(this.team);
  }

  @HostListener('keydown.enter') onEnterKeypress(e: Event) {
    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();
  }
}
