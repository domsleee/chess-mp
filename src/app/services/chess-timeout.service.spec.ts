import { TestBed } from '@angular/core/testing';

import { ChessTimeoutService } from './chess-timeout.service';

describe('ChessTimeoutService', () => {
  let service: ChessTimeoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChessTimeoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
