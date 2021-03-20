import { ChessInstance } from "chess.js";
import { Api } from "chessground/api";
import { invertColor, toColor, toDests } from "src/app/util/play";

export class OnePlayerBoardChanger {
  constructor() {
  }

  static setMovablezz(chess: ChessInstance, cg: Api) {
    cg.set({
      turnColor: toColor(chess),
      movable: {
        color: toColor(chess),
        dests: toDests(chess),
        free: false
      },
    });
  }

  static setPremovable(chess: ChessInstance, cg: Api) {
    cg.set({
      turnColor: toColor(chess),
      movable: {
        color: invertColor(toColor(chess)),
        dests: toDests(chess),
        free: false,
        showDests: true
      }
    });
  }

  static setUnmovable(chess: ChessInstance, cg: Api) {
    cg.set({
      turnColor: toColor(chess),
      movable: {
        color: 'white',
        dests: new Map(),
        free: false
      },
    });
  }

}