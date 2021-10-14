import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KontaktaiComponent } from './kontaktai.component';

describe('KontaktaiComponent', () => {
  let component: KontaktaiComponent;
  let fixture: ComponentFixture<KontaktaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KontaktaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KontaktaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
