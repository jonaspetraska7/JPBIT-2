import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabirintasComponent } from './labirintas.component';

describe('LabirintasComponent', () => {
  let component: LabirintasComponent;
  let fixture: ComponentFixture<LabirintasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabirintasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabirintasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
