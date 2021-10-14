import { TestBed } from '@angular/core/testing';

import { CartServiseService } from './cart-servise.service';

describe('CartServiseService', () => {
  let service: CartServiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartServiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
