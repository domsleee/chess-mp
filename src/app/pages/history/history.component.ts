import { Component, OnInit } from '@angular/core';
import { IPersistedGame } from 'src/app/services/local-storage/local-state';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  games: IPersistedGame[] = [];

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.games = this.localStorageService.getGames() ?? [];
  }
}
