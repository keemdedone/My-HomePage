import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTotalDisplayComponent } from './input-total-display.component';

describe('InputTotalDisplayComponent', () => {
  let component: InputTotalDisplayComponent;
  let fixture: ComponentFixture<InputTotalDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputTotalDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTotalDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
