import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarPeopleViewPageComponent } from './star-war-people-view-page.component';

describe('StarWarPeopleViewPageComponent', () => {
  let component: StarWarPeopleViewPageComponent;
  let fixture: ComponentFixture<StarWarPeopleViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarWarPeopleViewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarWarPeopleViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
