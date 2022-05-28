import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePopularPageComponent } from './movie-popular-page.component';

describe('MoviePopularPageComponent', () => {
  let component: MoviePopularPageComponent;
  let fixture: ComponentFixture<MoviePopularPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviePopularPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePopularPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
