import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFormInformationComponent } from './my-form-information.component';

describe('MyFormInformationComponent', () => {
  let component: MyFormInformationComponent;
  let fixture: ComponentFixture<MyFormInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFormInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFormInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
