import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftCategoryComponent } from './left-category.component';

describe('LeftCategoryComponent', () => {
  let component: LeftCategoryComponent;
  let fixture: ComponentFixture<LeftCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
