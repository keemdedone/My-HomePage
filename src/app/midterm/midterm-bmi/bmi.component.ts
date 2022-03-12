import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.scss']
})
export class BmiComponent implements OnInit {
  formGroup! : FormGroup;
  result = 0;

  constructor(
    private readonly fb : FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      height: [null,[Validators.required]],
      weight: [null,[Validators.required]],
    })
  }

  getresult(weight:string,height:string): void{
    if(isNaN(parseInt(weight) || parseInt(height))){
      return
    } else {
      this.result = Math.round(parseInt(weight)/((parseInt(height)/100)^2)); //เปลี่ยน str เป็น int
      if (isNaN(this.result)){
        this.result = 0;
      }
    }
  }
}
