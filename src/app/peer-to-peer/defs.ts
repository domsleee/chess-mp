import { Color, Key } from "chessground/types";

export type Message = IMove | IInfo | IReady;

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
  promotion: string
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
