import { Component, HostListener, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatExpansionPanelHeader } from '@angular/material/expansion';
import { Color } from 'chessground/types';
import { Observable, Subscription } from 'rxjs';
import { getSortedTeamKeys, IPlayerTeam, PlayerTeamDict } from 'src/app/components/chess-board/helpers/PlayerTeamHelper';
import { CommandService } from 'src/app/services/command.service';
import { PeerToPeerService } from 'src/app/services/peer-to-peer.service';
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

  constructor(
    private sharedDataService: SharedDataService,
    private peerToPeerService: PeerToPeerService,
    private commandService: CommandService
  ) {}

  ngOnInit(): void {
    debug("team selection init...");
    this.teamDictSubscription = this.sharedDataService.getNames(this.team).subscribe(t => {
      this.teamDict = t;
      this.sortedKeys = getSortedTeamKeys(this.teamDict);
      console.log("sortedKeys", this.sortedKeys);

      for (const key of Object.keys(this.teamDict)) {
        this.setSortNumberFns[key] = (n: number) => {
          console.log("setSortNumberFns", key, n);
          this.sharedDataService.setSortNumber(key, n);
        };
      }
    });
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
    this.commandService.addCPU(this.team);
  }

  deleteCpu(e: Event, playerId: string) {
    this.peerToPeerService.broadcastAndToSelf({
      command: 'DELETE_PLAYER',
      playerId
    });
    e.stopPropagation();
  }

  @HostListener('keydown.enter') onEnterKeypress(e: Event) {
    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();
  }
}
