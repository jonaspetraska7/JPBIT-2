import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduktasComponent } from './produktas.component';

describe('ProduktasComponent', () => {
  let component: ProduktasComponent;
  let fixture: ComponentFixture<ProduktasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduktasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduktasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
