import { TestBed } from '@angular/core/testing';

import { IsHostGuardGuard } from './is-host-guard.guard';

describe('IsHostGuardGuard', () => {
  let guard: IsHostGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsHostGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
