import { TestBed } from '@angular/core/testing';

import { DataFerryService } from './data-ferry.service';

describe('DataFerryService', () => {
  let service: DataFerryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataFerryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
