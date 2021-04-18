import { IEngineSettings, PlayerTeamDict } from 'src/app/components/chess-board/helpers/PlayerTeamHelper';

export function getEngineName(engineSettings: IEngineSettings) {
  return `SF${engineSettings.skillLevel}(${engineSettings.elo != undefined ? engineSettings.elo + ',' : ''}${(engineSettings.timeForMove ?? 0) / 1000}s)`;
}
