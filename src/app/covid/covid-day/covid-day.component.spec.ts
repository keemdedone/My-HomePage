import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidDayComponent } from './covid-day.component';

describe('CovidDayComponent', () => {
  let component: CovidDayComponent;
  let fixture: ComponentFixture<CovidDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
