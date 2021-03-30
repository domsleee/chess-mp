import { mateInTwoFen } from "../fen";

export interface ISharedData extends ISharedDataOptionals {
  matchCount: number;
}

export interface ISharedDataOptionals {
  timerSettings?: ITimerSettings;
  startFen?: string;
}

export interface ITimerSettings {
  whiteTime?: number;
  whiteIncrement?: number;
  asymmetric?: boolean;
  blackTime?: number;
  blackIncrement?: number;
}

export function getDefaultSharedData(): ISharedData {
  return {
    timerSettings: {
      whiteTime: 60,
      whiteIncrement: 2,
      asymmetric: true,
      blackTime: 60,
      blackIncrement: 0
    },
    // startFen: mateInTwoFen
    matchCount: 1
  }
}