import { Component, Input, OnInit } from '@angular/core';
import { myFormData } from '../my-form.service';

@Component({
  selector: 'app-my-form-information',
  templateUrl: './my-form-information.component.html',
  styleUrls: ['./my-form-information.component.scss']
})
export class MyFormInformationComponent implements OnInit {

  @Input() data: myFormData | null = null;

  constructor() { }

  ngOnInit(): void {
    return
  }

}
