import { ClassGetter } from "@angular/compiler/src/output/output_ast";
import { ChessInstance } from "chess.js";
import { Api } from "chessground/api";
import { Color } from "chessground/types";
import { invertColor, toColor, toDests } from "src/app/util/play";
import { IBoardChanger } from "./IBoardChanger";

export class OnePlayerBoardChanger implements IBoardChanger {
  constructor(private myPlayer: Color) {
  }

  initial(chess: ChessInstance, cg: Api): void {
    OnePlayerBoardChanger.setMovable(chess, cg, this.myPlayer, true);
  }
  
  onMove(chess: ChessInstance, cg: Api): void {
    OnePlayerBoardChanger.setMovable(chess, cg, this.myPlayer, toColor(chess) == this.myPlayer);
  }

  static setMovable(chess: ChessInstance, cg: Api, myColor: Color, myTurn: boolean) {
    cg.set({
      turnColor: toColor(chess),
      movable: {
        color: myColor,
        dests: toDests(chess),
        free: !myTurn
      },
    });
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
        free: true
      },
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