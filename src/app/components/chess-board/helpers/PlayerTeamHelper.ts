import { Color } from "chessground/types";
import { DEFAULT_ID } from "src/app/services/peer-to-peer.service";
import { getEngineName } from "src/app/shared/engine/engine-helpers";
import { environment } from "src/environments/environment";

export function getDefaultNames() {
  const engineSettings: IEngineSettings = getDefaultEngineSettings();
  const engineSettings2: IEngineSettings = {
    ...engineSettings,
    elo: 1350
  };

  if (false && !environment.production) {
    const d: any = {};
    for (let i = 0; i < 20; ++i) {
      const s = 'abc' + i.toString();
      d[s] = createPlayerTeam(s, 'black', engineSettings)
    }
    return {
      [DEFAULT_ID]: createPlayerTeam('default'),
      ...d
    }
  }

  return {
    [DEFAULT_ID]: createPlayerTeam('default'),
    'stockfish': createPlayerTeam(getEngineName(engineSettings), 'black', engineSettings),
    'stockfish2': createPlayerTeam(getEngineName(engineSettings2), 'black', engineSettings2)
  }
}

export function getDefaultEngineSettings(): IEngineSettings {
  return {
    timeForMove: 700,
    elo: 2850,
    skillLevel: 20
  };
}

function createPlayerTeam(name: string, color: Color = 'white', engineSettings: IEngineSettings | undefined = undefined): IPlayerTeam {
  return {
    name,
    team: color,
    owner: DEFAULT_ID,
    isReady: true,
    sortNumber: 0,
    engineSettings
  };
}

export function getSortedTeamKeys(names: PlayerTeamDict) {
  return Object.keys(names).sort((a, b) => {
    const lt = (c: string, d: string) => (names[c].sortNumber < names[d].sortNumber)
                                      || (names[c].sortNumber === names[d].sortNumber && c < d);
    if (lt(a,b)) return -1;
    if (lt(b,a)) return 1;
    return 0;
  });
}

export interface IEngineSettings {
  timeForMove?: number;
  elo?: number;
  skillLevel?: number;
}

export interface IPlayerTeam {
  name: string;
  team: Color;
  owner: string;
  sortNumber: number;
  isReady?: boolean;
  engineSettings?: IEngineSettings;
  rematchRequested?: boolean;
}

export type PlayerTeamDict = {[id: string]: IPlayerTeam};

