import { IGetNextMove } from "./GetNextMove/IGetNextMove";
import { NullGetNextMove } from "./GetNextMove/NullGetNextMove";
import { StockfishGetNextMove } from "./GetNextMove/StockfishGetNextMove";
import { getSortedTeamKeys, IPlayerTeam, PlayerTeamDict } from "./PlayerTeamHelper";

export class MoveHandlerResolver {
  private moveHandlers: {
    'white': IGetNextMove[],
    'black': IGetNextMove[]
  };

  constructor(private whiteTeamDict: PlayerTeamDict, private blackTeamDict: PlayerTeamDict) {
    this.moveHandlers = {
      'white': this.buildMoveHandlers(whiteTeamDict),
      'black': this.buildMoveHandlers(blackTeamDict)
    }
  }

  private buildMoveHandlers(teamDict: PlayerTeamDict) {
    const keys = Object.keys(teamDict);
    if (keys.length == 0) {
      return [new NullGetNextMove()];
    }
    
    return getSortedTeamKeys(teamDict).map(key => this.buildMoveHandler(teamDict[key]));
  }

  private buildMoveHandler(player: IPlayerTeam): IGetNextMove {
    if (player.engineSettings == null) return new NullGetNextMove();
    return new StockfishGetNextMove(player.engineSettings);
  }

  getMoveHander(moveNumber: number): IGetNextMove {
    const turnColor = moveNumber % 2 == 0 ? 'white' : 'black';
    const numHandlers = this.moveHandlers[turnColor].length;
    console.log("GET MOVE HANDLER", moveNumber);
    return this.moveHandlers[turnColor][Math.floor(moveNumber / 2) % numHandlers];
  }
}