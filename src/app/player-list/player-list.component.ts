import { Component, Input, OnInit } from '@angular/core';
import { createPlayerTeam } from '../chess-board/helpers/PlayerTeamHelper';
import { DEFAULT_ID } from '../peer-to-peer.service';
import { PlayerTeamDict, IPlayerTeam } from '../player-collector.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

  constructor() { }

  @Input() players: PlayerTeamDict | null = null;
  @Input() currentId = '';
  @Input() nextId: string | null = '';

  ngOnInit(): void {
    if (this.players == null) throw new Error('players is required');
  }
}


