import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarPeopleListPageComponent } from './star-war-people-list-page.component';

describe('StarWarPeopleListPageComponent', () => {
  let component: StarWarPeopleListPageComponent;
  let fixture: ComponentFixture<StarWarPeopleListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarWarPeopleListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarWarPeopleListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
