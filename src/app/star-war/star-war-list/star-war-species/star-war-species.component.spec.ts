import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarSpeciesComponent } from './star-war-species.component';

describe('StarWarSpeciesComponent', () => {
  let component: StarWarSpeciesComponent;
  let fixture: ComponentFixture<StarWarSpeciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarWarSpeciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarWarSpeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
