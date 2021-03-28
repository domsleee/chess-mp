import { TestBed } from '@angular/core/testing';

import { RouteUtilsService } from './route-utils.service';

describe('RouteUtilsService', () => {
  let service: RouteUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
