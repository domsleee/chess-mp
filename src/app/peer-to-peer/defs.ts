import { Color, Key } from "chessground/types";
import * as ChessJS from 'chess.js';
export const Chess = typeof ChessJS === 'function' ? ChessJS : ChessJS.Chess;


export type Message = IMove | IInfo | IReady | IStart;

export interface IMessage {
  type: 'BROADCAST',
  from: string,
  data: Message
}


export interface ICommand {
  command: string;
}

export interface IMove extends ICommand {
  command: 'MOVE';
  numMoves: number;
  orig: Key,
  dest: Key,
  promotion?: Exclude<ChessJS.PieceType, 'p'>
}

export interface IInfo extends ICommand {
  command: 'INFO',
  name: string,
  team?: Color,
  owner: string,
  isReady?: boolean
};

export interface IReady extends ICommand {
  command: 'READY',
  isReady: boolean
};

export interface IStart extends ICommand {
  command: 'START',
};