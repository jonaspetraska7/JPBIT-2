import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagrindinisComponent } from './pagrindinis.component';

describe('PagrindinisComponent', () => {
  let component: PagrindinisComponent;
  let fixture: ComponentFixture<PagrindinisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagrindinisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagrindinisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
