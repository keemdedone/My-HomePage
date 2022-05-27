import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicDropComponent } from './music-drop.component';

describe('MusicDropComponent', () => {
  let component: MusicDropComponent;
  let fixture: ComponentFixture<MusicDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicDropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
