
export interface ISharedData {
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
    }
  }
}