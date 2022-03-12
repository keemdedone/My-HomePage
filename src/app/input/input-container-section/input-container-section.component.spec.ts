import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputContainerSectionComponent } from './input-container-section.component';

describe('InputContainerSectionComponent', () => {
  let component: InputContainerSectionComponent;
  let fixture: ComponentFixture<InputContainerSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputContainerSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputContainerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
