import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarSpeciesViewPageComponent } from './star-war-species-view-page.component';

describe('StarWarSpeciesViewPageComponent', () => {
  let component: StarWarSpeciesViewPageComponent;
  let fixture: ComponentFixture<StarWarSpeciesViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarWarSpeciesViewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarWarSpeciesViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
