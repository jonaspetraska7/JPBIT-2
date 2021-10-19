import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KrepselioSumaComponent } from './krepselio-suma.component';

describe('KrepselioSumaComponent', () => {
  let component: KrepselioSumaComponent;
  let fixture: ComponentFixture<KrepselioSumaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KrepselioSumaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KrepselioSumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
