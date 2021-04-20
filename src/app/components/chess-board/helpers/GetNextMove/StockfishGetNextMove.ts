import { ChessInstance, ShortMove, Square } from 'chess.js';
import { Subject, timer } from 'rxjs';
import { IGetNextMove } from './IGetNextMove';
import { filter, take, tap } from 'rxjs/operators';
import { IEngineSettings } from '../PlayerTeamHelper';
import { getLogger } from 'src/app/services/logger';

const logger = getLogger('stockfish');

// declare var require: any;
// const Stockfish = require('stockfish.wasm'); // the module, not the file

export class StockfishGetNextMove implements IGetNextMove {
  initPromise: Promise<any>;
  sf: any;
  sfEmitter = new Subject<string>();

  movetime = 700;

  constructor(private engineSettings: IEngineSettings) {
    // @ts-ignore
    this.movetime = engineSettings.timeForMove ?? 700;

    if (!('Stockfish' in window)) {
      this.initPromise = new Promise(resolve => resolve(1));
      return;
    }

    // @ts-ignore
    this.initPromise = Stockfish().then((sf: any) => {
      this.sf = sf;
      sf.addMessageListener((line: any) => {
        this.sfEmitter.next(line);

        if (line === 'uciok') {
          logger.info('OK!');
          sf.postMessage('setoption name UCI_LimitStrength value true');
          sf.postMessage(`setoption name UCI_Elo value ${this.engineSettings.elo ?? 2850}`);
          sf.postMessage(`setoption name Skill Level value ${this.engineSettings.skillLevel ?? 20}`);

          // sf.postMessage("setoption name MultiPV value 5");

          // sf.postMessage("setoption name Skill Level value 0");
          // sf.postMessage("setoption name Skill Level Maximum Error value 900");
          // sf.postMessage("setoption name Skill Level Probability value 10")
        }
      });
      sf.postMessage('uci');
    });
  }

  doInit() {
    return this.initPromise.then();
  }

  async getMove(cg: ChessInstance) {
    const t = timer(this.movetime);
    t.pipe();
    await this.doInit();
    logger.info(cg.fen());
    this.sf.postMessage(`position fen ${cg.fen()}`);
    this.sf.postMessage(`go movetime ${this.movetime}`);

    const bestMovePromise = this.sfEmitter.pipe(
      filter(val => val.startsWith('bestmove')),
      take(1)
    ).toPromise();
    const timerPromise = t.pipe(take(1)).toPromise();

    await timerPromise;
    const bestMove = await bestMovePromise;

    const s = bestMove.split(' ')[1];
    const promotion = bestMove.length === 5 ? bestMove[4] : '';
    const ret: ShortMove = {
      from: (s[0] + s[1]) as Square,
      to: (s[2] + s[3]) as Square,
      promotion: promotion as any
    };
    return ret;
  }
}
