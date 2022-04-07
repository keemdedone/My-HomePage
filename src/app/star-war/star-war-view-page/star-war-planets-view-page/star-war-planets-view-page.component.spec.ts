import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarPlanetsViewPageComponent } from './star-war-planets-view-page.component';

describe('StarWarPlanetsViewPageComponent', () => {
  let component: StarWarPlanetsViewPageComponent;
  let fixture: ComponentFixture<StarWarPlanetsViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarWarPlanetsViewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarWarPlanetsViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
