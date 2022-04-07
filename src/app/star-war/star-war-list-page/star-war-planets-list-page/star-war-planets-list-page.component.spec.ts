import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarPlanetsListPageComponent } from './star-war-planets-list-page.component';

describe('StarWarPlanetsListPageComponent', () => {
  let component: StarWarPlanetsListPageComponent;
  let fixture: ComponentFixture<StarWarPlanetsListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarWarPlanetsListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarWarPlanetsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
