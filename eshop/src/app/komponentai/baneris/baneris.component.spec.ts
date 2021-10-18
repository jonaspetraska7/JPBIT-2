import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanerisComponent } from './baneris.component';

describe('BanerisComponent', () => {
  let component: BanerisComponent;
  let fixture: ComponentFixture<BanerisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanerisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BanerisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
