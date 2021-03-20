import { Color } from "chessground/types";
import { DEFAULT_ID } from "src/app/peer-to-peer.service";

export function createPlayerTeam(name: string, color: Color = 'white', engineSettings: IEngineSettings | undefined = undefined): IPlayerTeam {
  return {
    name,
    team: color,
    owner: 'zzz',
    isOwnedByMe: false,
    isReady: true,
    engineSettings
  }
}

export function getDefaultNames() {
  const engineSettings: IEngineSettings = getDefaultEngineSettings();

  return {
    [DEFAULT_ID]: createPlayerTeam('default'),
    'stockfish': createPlayerTeam('stockfish', 'black', engineSettings)
  }
}

export function getDefaultEngineSettings(): IEngineSettings {
  return {
    timeForMove: 650
  };
}

export interface IEngineSettings {
  timeForMove?: number;
  elo?: number;
};

export interface IPlayerTeam {
  name: string;
  team: Color;
  owner: string;
  isOwnedByMe: boolean;
  isReady: boolean;
  engineSettings?: IEngineSettings;
};

export type PlayerTeamDict = {[id: string]: IPlayerTeam};

