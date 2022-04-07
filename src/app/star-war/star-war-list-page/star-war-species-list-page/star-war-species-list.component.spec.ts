import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarSpeciesListComponent } from './star-war-species-list.component';

describe('StarWarSpeciesListComponent', () => {
  let component: StarWarSpeciesListComponent;
  let fixture: ComponentFixture<StarWarSpeciesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarWarSpeciesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarWarSpeciesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
