import { Color } from "chessground/types";
import { IPlayerTeam, PlayerTeamDict } from "src/app/player-collector.service";
import { invertColor } from "src/app/util/play";
import { IGetNextMove } from "./GetNextMove/IGetNextMove";
import { NullGetNextMove } from "./GetNextMove/NullGetNextMove";
import { StockfishGetNextMove } from "./GetNextMove/StockfishGetNextMove";

export class MoveHandlerResolver {
  moveHandlers: IGetNextMove[] = [new NullGetNextMove(), new StockfishGetNextMove(650)]

  constructor(useDefault: boolean) {
    console.log("USEDEFAULT", useDefault);
    if (!useDefault) {
      this.moveHandlers = [new NullGetNextMove(), new NullGetNextMove()];
    }
  }

  getMoveHander(moveNumber: number): IGetNextMove {
    console.log("GET MOVE HANDLER", moveNumber);
    return this.moveHandlers[moveNumber % 2];
  }
}