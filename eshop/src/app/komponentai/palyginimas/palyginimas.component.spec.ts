import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalyginimasComponent } from './palyginimas.component';

describe('PalyginimasComponent', () => {
  let component: PalyginimasComponent;
  let fixture: ComponentFixture<PalyginimasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalyginimasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalyginimasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
