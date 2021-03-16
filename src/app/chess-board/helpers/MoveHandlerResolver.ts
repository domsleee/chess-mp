import { Color } from "chessground/types";
import { IPlayerTeam, PlayerTeamDict } from "src/app/player-collector.service";
import { invertColor } from "src/app/util/play";
import { IGetNextMove } from "./GetNextMove/IGetNextMove";
import { NullGetNextMove } from "./GetNextMove/NullGetNextMove";
import { StockfishGetNextMove } from "./GetNextMove/StockfishGetNextMove";

export class MoveHandlerResolver {
  moveHandlers: IGetNextMove[] = [new NullGetNextMove(), new StockfishGetNextMove(650)]

  constructor(private myId: string, private names: PlayerTeamDict | null) {
    if (names != null) {
      this.moveHandlers = [new NullGetNextMove(), new NullGetNextMove()];
    }
  }

  getMoveHander(moveNumber: number): IGetNextMove {
    return this.moveHandlers[moveNumber % 2];
  }
}