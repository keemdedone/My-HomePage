import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.scss']
})
export class BmiComponent implements OnInit {

  result = 0;

  ngOnInit(): void {
    return;
  }

  getresult(weight:string,height:string): void{
    this.result = parseInt(weight)/((parseInt(height)/100)^2); //เปลี่ยน str เป็น int
  }
}
