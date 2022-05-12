import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidDayPageComponent } from './covid-day-page.component';

describe('CovidDayPageComponent', () => {
  let component: CovidDayPageComponent;
  let fixture: ComponentFixture<CovidDayPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidDayPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidDayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
