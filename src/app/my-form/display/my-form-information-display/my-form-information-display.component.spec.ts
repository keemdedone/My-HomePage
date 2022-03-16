import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFormInformationDisplayComponent } from './my-form-information-display.component';

describe('MyFormInformationDisplayComponent', () => {
  let component: MyFormInformationDisplayComponent;
  let fixture: ComponentFixture<MyFormInformationDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFormInformationDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFormInformationDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
