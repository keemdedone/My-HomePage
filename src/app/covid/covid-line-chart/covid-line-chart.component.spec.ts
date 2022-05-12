import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidLineChartComponent } from './covid-line-chart.component';

describe('CovidLineChartComponent', () => {
  let component: CovidLineChartComponent;
  let fixture: ComponentFixture<CovidLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidLineChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
