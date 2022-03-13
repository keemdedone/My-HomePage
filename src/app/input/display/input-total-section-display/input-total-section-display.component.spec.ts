import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTotalSectionDisplayComponent } from './input-total-section-display.component';

describe('InputTotalSectionDisplayComponent', () => {
  let component: InputTotalSectionDisplayComponent;
  let fixture: ComponentFixture<InputTotalSectionDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputTotalSectionDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTotalSectionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
