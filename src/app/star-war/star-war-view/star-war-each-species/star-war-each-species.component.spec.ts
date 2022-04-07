import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarEachSpeciesComponent } from './star-war-each-species.component';

describe('StarWarEachSpeciesComponent', () => {
  let component: StarWarEachSpeciesComponent;
  let fixture: ComponentFixture<StarWarEachSpeciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarWarEachSpeciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarWarEachSpeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
