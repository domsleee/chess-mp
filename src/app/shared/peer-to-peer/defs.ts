import { Color, Key } from "chessground/types";
import * as ChessJS from 'chess.js';
import { IEngineSettings, PlayerTeamDict } from "../../components/chess-board/helpers/PlayerTeamHelper";
import { ISharedData, ISharedDataOptionals } from "./shared-data";
export const Chess = typeof ChessJS === 'function' ? ChessJS : ChessJS.Chess;


export type MessageData = IMove | IInfo | IStart | IDisconnectNotification | ISendNames | IUpdateShared |
                          IDeclareTimeout | IDeletePlayer;

export interface IMessage {
  type: 'BROADCAST' | 'SINGLE';
  from: string;
  data: MessageData;
  echoBroadcast?: boolean;
}


export interface ICommand {
  command: string;
}

export interface IMove extends ICommand {
  command: 'MOVE';
  numMoves: number;
  orig: Key;
  dest: Key;
  matchId: number;
  claimedTime: number;
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
  rematchRequested?: boolean;
  sortNumber?: number;
}


export interface IUpdateShared extends ICommand {
  command: 'UPDATE_SHARED';
  sharedData: ISharedData | ISharedDataOptionals;
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
  sharedData: ISharedData;
}

export interface IDeclareTimeout extends ICommand {
  command: 'DECLARE_TIMEOUT';
  matchId: number;
  color: Color;
}

export interface IDeletePlayer extends ICommand {
  command: 'DELETE_PLAYER';
  playerId: string;
}
