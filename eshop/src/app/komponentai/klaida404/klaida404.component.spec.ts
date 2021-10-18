import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Klaida404Component } from './klaida404.component';

describe('Klaida404Component', () => {
  let component: Klaida404Component;
  let fixture: ComponentFixture<Klaida404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Klaida404Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Klaida404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
