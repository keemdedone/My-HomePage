import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyformPageDisplayComponent } from './myform-page-display.component';

describe('MyformPageDisplayComponent', () => {
  let component: MyformPageDisplayComponent;
  let fixture: ComponentFixture<MyformPageDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyformPageDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyformPageDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
