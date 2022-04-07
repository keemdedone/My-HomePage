import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarPlanetComponent } from './star-war-planet.component';

describe('StarWarPlanetComponent', () => {
  let component: StarWarPlanetComponent;
  let fixture: ComponentFixture<StarWarPlanetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarWarPlanetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarWarPlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
