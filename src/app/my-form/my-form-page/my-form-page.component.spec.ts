import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFormPageComponent } from './my-form-page.component';

describe('MyFormPageComponent', () => {
  let component: MyFormPageComponent;
  let fixture: ComponentFixture<MyFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
