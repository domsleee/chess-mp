import { ChessInstance } from "chess.js";
import { Api } from "chessground/api";

export interface IBoardChanger {
  initial(chess: ChessInstance, cg: Api): void;
  onMove(chess: ChessInstance, chessGrounds: Api): void;
};