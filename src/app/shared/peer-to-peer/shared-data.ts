// import { enPassantFen, mateInTwoFen, promotionFen } from '../fen';

export interface ISharedData {
  matchCount: number;
  timerSettings: ITimerSettings;
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
      asymmetric: false,
      blackTime: 60,
      blackIncrement: 0
    },
    // startFen: promotionFen,
    matchCount: 1
  };
}
