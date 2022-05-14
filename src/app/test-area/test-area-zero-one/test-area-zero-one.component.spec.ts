import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAreaZeroOneComponent } from './test-area-zero-one.component';

describe('TestAreaZeroOneComponent', () => {
  let component: TestAreaZeroOneComponent;
  let fixture: ComponentFixture<TestAreaZeroOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestAreaZeroOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAreaZeroOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
