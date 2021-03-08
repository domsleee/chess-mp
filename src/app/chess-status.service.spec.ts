import { TestBed } from '@angular/core/testing';

import { ChessStatusService } from './chess-status.service';

describe('ChessStatusService', () => {
  let service: ChessStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChessStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
