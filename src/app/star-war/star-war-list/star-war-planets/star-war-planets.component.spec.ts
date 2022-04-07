import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarPlanetsComponent } from './star-war-planets.component';

describe('StarWarPlanetsComponent', () => {
  let component: StarWarPlanetsComponent;
  let fixture: ComponentFixture<StarWarPlanetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarWarPlanetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarWarPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
