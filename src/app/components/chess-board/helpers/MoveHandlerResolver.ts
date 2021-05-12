import { Color } from 'chessground/types';
import { IGetNextMove } from './GetNextMove/IGetNextMove';
import { NullGetNextMove } from './GetNextMove/NullGetNextMove';
import { StockfishGetNextMove } from './GetNextMove/StockfishGetNextMove';
import { getSortedTeamKeys, IPlayerTeam, PlayerTeamDict } from './PlayerTeamHelper';

export class MoveHandlerResolver {
  private moveHandlers: {
    'white': IGetNextMove[],
    'black': IGetNextMove[]
  };

  constructor(private myId: string, whiteTeamDict: PlayerTeamDict, blackTeamDict: PlayerTeamDict) {
    this.moveHandlers = {
      white: this.buildMoveHandlers(whiteTeamDict),
      black: this.buildMoveHandlers(blackTeamDict)
    };
  }

  private buildMoveHandlers(teamDict: PlayerTeamDict) {
    const keys = Object.keys(teamDict);
    if (keys.length === 0) {
      return [new NullGetNextMove()];
    }

    return getSortedTeamKeys(teamDict).map(key => this.buildMoveHandler(teamDict[key]));
  }

  private buildMoveHandler(player: IPlayerTeam): IGetNextMove {
    if (player.engineSettings == null || player.owner !== this.myId) return new NullGetNextMove();
    return new StockfishGetNextMove(player.engineSettings);
  }

  getMoveHander(color: Color, moveNumber: number): IGetNextMove {
    const numHandlers = this.moveHandlers[color].length;
    return this.moveHandlers[color][Math.floor(moveNumber / 2) % numHandlers];
  }
}
