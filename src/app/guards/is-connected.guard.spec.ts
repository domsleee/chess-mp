import { TestBed } from '@angular/core/testing';

import { IsConnectedGuard } from './is-connected.guard';

describe('IsHostGuardGuard', () => {
  let guard: IsConnectedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsConnectedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
