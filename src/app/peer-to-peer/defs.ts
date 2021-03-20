import { Color, Key } from "chessground/types";
import * as ChessJS from 'chess.js';
import { IEngineSettings, PlayerTeamDict } from "../chess-board/helpers/PlayerTeamHelper";
export const Chess = typeof ChessJS === 'function' ? ChessJS : ChessJS.Chess;


export type MessageData = IMove | IInfo | IReady | IStart | IDisconnectNotification | ISendNames;

export interface IMessage {
  type: 'BROADCAST' | 'SINGLE';
  from: string;
  data: MessageData;
}


export interface ICommand {
  command: string;
}

export interface IMove extends ICommand {
  command: 'MOVE';
  numMoves: number;
  orig: Key;
  dest: Key;
  promotion?: Exclude<ChessJS.PieceType, 'p'>;
}

export interface IInfo extends ICommand, IInfoOptionals {
  command: 'INFO';
  name: string;
  owner: string;
  
}

export interface IInfoOptionals {
  team?: Color;
  isReady?: boolean;
  idOverride?: string;
  engineSettings?: IEngineSettings;
}

export interface IReady extends ICommand {
  command: 'READY';
  isReady: boolean;
}

export interface IStart extends ICommand {
  command: 'START';
}

export interface IDisconnectNotification extends ICommand {
  command: 'DISCONNECTED';
  name: string;
}


export interface ISendNames extends ICommand {
  command: 'SET_NAMES';
  names: PlayerTeamDict;
}