import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduktuKategorijosComponent } from './produktu-kategorijos.component';

describe('ProduktuKategorijosComponent', () => {
  let component: ProduktuKategorijosComponent;
  let fixture: ComponentFixture<ProduktuKategorijosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduktuKategorijosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduktuKategorijosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
