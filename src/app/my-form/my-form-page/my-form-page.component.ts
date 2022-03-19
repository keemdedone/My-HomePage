import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { myFormData } from '../my-form.service';

@Component({
  selector: 'app-my-form-page',
  templateUrl: './my-form-page.component.html',
  styleUrls: ['./my-form-page.component.scss'],
})
export class MyFormPageComponent implements OnInit {
  @Input() data!: myFormData;
  @Output() update = new EventEmitter<myFormData>();

  formGroup!: FormGroup;
  value: any | null = null; //for check console.log()

  constructor(
    private readonly fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      fname: [null,[Validators.required]],
      lname:  [null,[Validators.required]],
      fatherName: [null,[Validators.required]],
      motherName:[null,[Validators.required]],
      siterName: [null,[Validators.required]],
      age: [null,[Validators.required]],
      gender: [null,[Validators.required]],
      address: [null,[Validators.required]],
    });
  }

  onSubmit(): void{
    this.formGroup.updateValueAndValidity();

    if(this.formGroup.invalid){
      this.formGroup.markAllAsTouched();
    } else {
      this.value = this.formGroup.value //for check console.log()
      console.log(this.value)
      this.update.emit(this.value)
    }
  }

}
