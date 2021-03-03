import { ChessTimerFormatPipe } from './chess-timer-format.pipe';

describe('ChessTimerFormatPipe', () => {
  it('create an instance', () => {
    const pipe = new ChessTimerFormatPipe();
    expect(pipe).toBeTruthy();
  });

  it('certain values', () => {
    const pipe = new ChessTimerFormatPipe();
    expect(pipe.transform(10)).toEqual("10");
    expect(pipe.transform(9)).toEqual("9.0"); //

  });
});
