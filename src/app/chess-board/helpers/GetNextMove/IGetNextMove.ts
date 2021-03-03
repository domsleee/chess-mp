import { ChessInstance, Move, ShortMove } from "chess.js";

export interface IGetNextMove {
  getMove(cg: ChessInstance): Promise<ShortMove | null>;
}
