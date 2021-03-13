import { Injectable } from '@angular/core';
import { PlayerTeamDict } from './player-collector.service';

@Injectable({
  providedIn: 'root'
})
export class DataFerryService {
  names: PlayerTeamDict | null = null;

  constructor() { }

  setNames(names: PlayerTeamDict) {
    this.names = JSON.parse(JSON.stringify(names));
  }

  getNames() {
    return this.names;
  }
}
