import { TestBed } from '@angular/core/testing';

import { ApiServisasService } from './api-servisas.service';

describe('ApiServisasService', () => {
  let service: ApiServisasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServisasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
