import { Color } from "chessground/types";
import { IPlayerTeam } from "src/app/player-collector.service";
import { invertColor } from "src/app/util/play";
import { IGetNextMove } from "./GetNextMove/IGetNextMove";
import { NullGetNextMove } from "./GetNextMove/NullGetNextMove";
import { StockfishGetNextMove } from "./GetNextMove/StockfishGetNextMove";

export class MoveHandler {
  players: {
    'white': string[],
    'black': string[]
  };
  moveHandlers: IGetNextMove[] = [new NullGetNextMove(), new StockfishGetNextMove(650)]

  constructor(private myId: string, private names: {[key: string]: IPlayerTeam} | null, private inverted = false) {
    if (names == null) {
      this.players = {'white': [myId], 'black': [myId + 'a']};
    } else {
      this.players = {
        'white': Object.keys(names).filter(t => names[t].team == 'white'),
        'black': Object.keys(names).filter(t => names[t].team == 'black'),
      }
      this.moveHandlers = [new NullGetNextMove(), new NullGetNextMove()];
    }
  }

  getTeam(): Color {
    return this.players['white'].filter(t => t == this.myId).length === 1 ? 'white' : 'black';
  }
  
  isMyMoveNext(moveNumber: number) {
    return this.isMyMove(moveNumber + 1);
  }

  isMyMove(moveNumber: number) {
    return this.getPlayer(moveNumber) == this.myId;
  }

  private getPlayer(moveNumber: number) {
    const moveColour: Color = moveNumber % 2 == 0 ? 'white' : 'black';
    const teamsTurn = !this.inverted ? moveColour : invertColor(moveColour);
    const playersInTeam = this.players[teamsTurn].length;
    return this.players[teamsTurn][Math.floor(moveNumber/2) % playersInTeam];
  }

  didMoveBelongToMe(moveNumber: number) {
    return this.isMyMove(moveNumber) || this.names != null && this.names[this.getPlayer(moveNumber)].isOwnedByMe;
  }

  getMoveHander(moveNumber: number): IGetNextMove {
    return this.moveHandlers[moveNumber % 2];
  }
}