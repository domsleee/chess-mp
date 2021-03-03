import { ChessInstance, Move } from "chess.js";

export interface IGetNextMove {
  getMove(cg: ChessInstance): Promise<Move | null>;
};
