import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { myFormData } from '../my-form.service';

@Component({
  selector: 'app-my-form-page',
  templateUrl: './my-form-page.component.html',
  styleUrls: ['./my-form-page.component.scss']
})
export class MyFormPageComponent implements OnInit {

  @Input() data!: myFormData;
  @Output() update = new EventEmitter<myFormData>();

  formGroup!: FormGroup;
  value: any | null = null;

  constructor(
    private readonly fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      fname: [null,[Validators.required]],
      lname:  [null,[Validators.required]],
      fatherName: [null,[Validators.required]],
      motherName:[null,[Validators.required]],
      siterName: [null],
      age: [null,[Validators.required]],
      gender: [null,[Validators.required]],
      address: [null,[Validators.required]],
    });
  }

  // get phoneNumbers(): FormArray {
  //   return this.formGroup.get('phoneNumbers') as FormArray
  // }

  // addPhoneNumber(): void{
  //   this.phoneNumbers.push(this.fb.control(null))
  // }

  // removePhoneNumber(index:number): void{
  //   this.phoneNumbers.removeAt(index)
  // }

  onSubmit(): void{
    this.formGroup.updateValueAndValidity();

    if(this.formGroup.invalid){
      this.formGroup.markAllAsTouched();
    } else {
      this.value = this.formGroup.value
      this.update.emit(this.value)
    }
  }

}
