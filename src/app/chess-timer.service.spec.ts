import { TestBed } from '@angular/core/testing';

import { ChessTimerService } from './chess-timer.service';

describe('ChessTimerService', () => {
  let service: ChessTimerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChessTimerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
