import { TestBed } from '@angular/core/testing';

import { LichessService } from './lichess.service';

describe('LichessService', () => {
  let service: LichessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LichessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
