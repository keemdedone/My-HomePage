import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidTotalPageComponent } from './covid-total-page.component';

describe('CovidTotalPageComponent', () => {
  let component: CovidTotalPageComponent;
  let fixture: ComponentFixture<CovidTotalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidTotalPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidTotalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
