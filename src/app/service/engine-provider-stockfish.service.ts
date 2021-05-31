import { Injectable } from '@angular/core';
import { IEngine } from '../shared/engine/IEngine';
import { IEngineProvider } from '../shared/engine/IEngineProvider';

@Injectable({
  providedIn: 'root'
})
export class EngineProviderStockfishService implements IEngineProvider {

  constructor() { }

  getEngine(): Promise<IEngine> {
    // @ts-ignore
    return Stockfish();
  }
}
