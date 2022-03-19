import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarPeopleComponent } from './star-war-people.component';

describe('StarWarPeopleComponent', () => {
  let component: StarWarPeopleComponent;
  let fixture: ComponentFixture<StarWarPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarWarPeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarWarPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
