import { TestBed } from '@angular/core/testing';

import { FireBaseService } from './fire-base.service';

describe('FireBaseService', () => {
  let service: FireBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
