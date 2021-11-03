import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduktoPridejimasComponent } from './produkto-pridejimas.component';

describe('ProduktoPridejimasComponent', () => {
  let component: ProduktoPridejimasComponent;
  let fixture: ComponentFixture<ProduktoPridejimasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduktoPridejimasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduktoPridejimasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
