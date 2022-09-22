import { TestBed } from '@angular/core/testing';

import { TwiceService } from './twice.service';

describe('TwiceService', () => {
  let service: TwiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
