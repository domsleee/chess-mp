import { Color } from "chessground/types";
import { DEFAULT_ID } from "src/app/services/peer-to-peer.service";

export function getDefaultNames() {
  const engineSettings: IEngineSettings = getDefaultEngineSettings();
  const engineSettings2: IEngineSettings = {
    ...engineSettings,
    elo: 1350
  };

  return {
    [DEFAULT_ID]: createPlayerTeam('default'),
    'stockfish': createPlayerTeam('Stockfish (3600)', 'black', engineSettings),
    'stockfish2': createPlayerTeam('Stockfish (1000)', 'black', engineSettings2)

  }
}

export function getDefaultEngineSettings(): IEngineSettings {
  return {
    timeForMove: 700,
    elo: 3600
  };
}

function createPlayerTeam(name: string, color: Color = 'white', engineSettings: IEngineSettings | undefined = undefined): IPlayerTeam {
  return {
    name,
    team: color,
    owner: DEFAULT_ID,
    isOwnedByMe: false,
    isReady: true,
    engineSettings
  }
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
  rematchRequested?: boolean;
};

export type PlayerTeamDict = {[id: string]: IPlayerTeam};

