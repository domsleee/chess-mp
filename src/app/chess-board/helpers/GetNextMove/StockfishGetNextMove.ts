import { ChessInstance, ShortMove, Square } from "chess.js";
import { Subject } from "rxjs";
import { IGetNextMove } from "./IGetNextMove";
import { filter, take, tap } from 'rxjs/operators';

// declare var require: any;
// const Stockfish = require('stockfish.wasm'); // the module, not the file

export class StockfishGetNextMove implements IGetNextMove {
  initPromise: Promise<any>;
  sf: any;
  sfEmitter = new Subject<string>();

  constructor() {
    // @ts-ignore
    this.initPromise = Stockfish().then((sf: any) => {
      this.sf = sf;
      sf.addMessageListener((line: any) => {
        this.sfEmitter.next(line);
        console.log(line);
      });
      sf.postMessage("uci");
    });
  }

  doInit() {
    return this.initPromise.then();
  }

  async getMove(cg: ChessInstance) {
    await this.doInit();
    this.sf.postMessage(`position fen ${cg.fen()}`);
    this.sf.postMessage("go movetime 3000");
    const bestMove = await this.sfEmitter.pipe(
      filter(val => val.startsWith("bestmove")),
      take(1)
    ).toPromise();
    const s = bestMove.split(" ")[1];
    const promotion = bestMove.length === 5 ? bestMove[4] : '';
    const ret: ShortMove = {
      from: (s[0] + s[1]) as Square,
      to: (s[2] + s[3]) as Square,
      promotion: promotion as any
    };
    return ret;
  }
}