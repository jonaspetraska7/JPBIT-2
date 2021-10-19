import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaruseleComponent } from './karusele.component';

describe('KaruseleComponent', () => {
  let component: KaruseleComponent;
  let fixture: ComponentFixture<KaruseleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KaruseleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KaruseleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
