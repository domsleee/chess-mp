import { Injectable } from '@angular/core';
import { NameType } from './player-collector.service';

@Injectable({
  providedIn: 'root'
})
export class DataFerryService {
  names: NameType | null = null;

  constructor() { }

  setNames(names: NameType) {
    this.names = JSON.parse(JSON.stringify(names));
  }

  getNames() {
    return this.names;
  }
}
