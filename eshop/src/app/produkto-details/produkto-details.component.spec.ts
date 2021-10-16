import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduktoDetailsComponent } from './produkto-details.component';

describe('ProduktoDetailsComponent', () => {
  let component: ProduktoDetailsComponent;
  let fixture: ComponentFixture<ProduktoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduktoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduktoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
