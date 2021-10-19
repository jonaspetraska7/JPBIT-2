import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KotaktuFormaComponent } from './kotaktu-forma.component';

describe('KotaktuFormaComponent', () => {
  let component: KotaktuFormaComponent;
  let fixture: ComponentFixture<KotaktuFormaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KotaktuFormaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KotaktuFormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
