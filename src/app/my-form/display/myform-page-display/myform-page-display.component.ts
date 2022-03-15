import { Component, OnInit } from '@angular/core';
import { MyFormService } from '../../my-form.service';

@Component({
  selector: 'app-myform-page-display',
  templateUrl: './myform-page-display.component.html',
  styleUrls: ['./myform-page-display.component.scss']
})
export class MyformPageDisplayComponent implements OnInit {

  constructor(
    public dataService: MyFormService,
  ) { }

  ngOnInit(): void {
    return
  }

}
