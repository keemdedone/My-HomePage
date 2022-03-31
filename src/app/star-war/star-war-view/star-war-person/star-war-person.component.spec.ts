import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarPersonComponent } from './star-war-person.component';

describe('StarWarPersonComponent', () => {
  let component: StarWarPersonComponent;
  let fixture: ComponentFixture<StarWarPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarWarPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarWarPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
