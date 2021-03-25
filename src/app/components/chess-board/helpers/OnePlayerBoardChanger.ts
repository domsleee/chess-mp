import { ChessInstance } from "chess.js";
import { Api } from "chessground/api";
import { invertColor, toColor, toDests } from "src/app/shared/util/play";

export class OnePlayerBoardChanger {
  constructor() {
  }

  static setMovable(chess: ChessInstance, cg: Api) {
    cg.set({
      turnColor: toColor(chess),
      movable: {
        color: toColor(chess),
        dests: toDests(chess),
        free: false,
        showDests: true
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
        color: undefined,
        dests: new Map(),
        free: false,
        showDests: false
      },
    });
  }

}