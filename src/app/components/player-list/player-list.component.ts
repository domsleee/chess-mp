import { Component, Input, OnInit } from '@angular/core';
import { PlayerTeamDict } from '../chess-board/helpers/PlayerTeamHelper';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

  constructor() { }

  @Input() players: PlayerTeamDict | null = null;
  @Input() currentId: string | null = '';
  @Input() nextId: string | null = '';

  ngOnInit(): void {
    //if (this.players == null) throw new Error('players is required');
    console.log(this.players);
  }
}
