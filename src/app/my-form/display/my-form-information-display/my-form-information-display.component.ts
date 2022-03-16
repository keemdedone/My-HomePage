import { Component, OnInit } from '@angular/core';
import { MyFormService } from '../../my-form.service';

@Component({
  selector: 'app-my-form-information-display',
  templateUrl: './my-form-information-display.component.html',
  styleUrls: ['./my-form-information-display.component.scss']
})
export class MyFormInformationDisplayComponent implements OnInit {

  constructor(
    public dataService: MyFormService,
  ) { }

  ngOnInit(): void {
    return
  }

}
