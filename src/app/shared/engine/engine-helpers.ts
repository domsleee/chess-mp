import { IEngineSettings, PlayerTeamDict } from "src/app/components/chess-board/helpers/PlayerTeamHelper";

export function getEngineName(engineSettings: IEngineSettings) {
  return `SF${engineSettings.skillLevel}(${engineSettings.elo != undefined ? engineSettings.elo + ',' : ''}${(engineSettings.timeForMove ?? 0) / 1000}s)`;
}

export function getNewCPUId(names: PlayerTeamDict, id: string) {
  const keys = Object.keys(names);
  let ct = 0;
  while (keys.includes(id)) {
    id = `${id}_sf${ct}`;
    ct++;
  }
  return id;
}