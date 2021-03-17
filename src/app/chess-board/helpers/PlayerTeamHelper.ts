import { Color } from "chessground/types";
import { IPlayerTeam } from "src/app/player-collector.service";

export function createPlayerTeam(name: string, color: Color = 'white'): IPlayerTeam {
  return {
    name,
    team: color,
    owner: 'zzz',
    isOwnedByMe: false,
    isReady: true
  }
}