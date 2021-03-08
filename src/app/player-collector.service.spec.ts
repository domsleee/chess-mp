import { TestBed } from '@angular/core/testing';

import { PlayerCollectorService } from './player-collector.service';

describe('PlayerCollectorService', () => {
  let service: PlayerCollectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerCollectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
