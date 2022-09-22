import { TestBed } from '@angular/core/testing';

import { IdolsService } from './idols.service';

describe('IdolsService', () => {
  let service: IdolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
