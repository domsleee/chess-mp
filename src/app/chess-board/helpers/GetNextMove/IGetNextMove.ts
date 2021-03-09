import { ChessInstance, Move, ShortMove } from "chess.js";

export interface IGetNextMove {
  getMove(chess: ChessInstance): Promise<ShortMove | null>;
}
