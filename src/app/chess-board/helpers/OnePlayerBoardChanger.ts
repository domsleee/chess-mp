import { ClassGetter } from "@angular/compiler/src/output/output_ast";
import { ChessInstance } from "chess.js";
import { Api } from "chessground/api";
import { Color } from "chessground/types";
import { toColor, toDests } from "src/app/util/play";
import { IBoardChanger } from "./IBoardChanger";

export class OnePlayerBoardChanger implements IBoardChanger {
  constructor(private myPlayer: Color) {
  }

  initial(chess: ChessInstance, cg: Api): void {
    cg.set({
      turnColor: toColor(chess),
      movable: {
        color: this.myPlayer,
        dests: toDests(chess),
      },
    });
  }
  
  onMove(chess: ChessInstance, cg: Api): void {
    cg.set({
      turnColor: toColor(chess),
      movable: {
        color: this.myPlayer,
        dests: toDests(chess),
        free: toColor(chess) != this.myPlayer
      },
    });
  }

}