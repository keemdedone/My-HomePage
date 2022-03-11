import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  A = false;
  B = true;
  A_txt = "Enabled";
  B_txt = "Disabled";

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

  check1(): void{
    this.A = true;
    this.B = false;
    const tmp = this.A_txt;
    this.A_txt = this.B_txt;
    this.B_txt = tmp;
  }

  check2(): void{
    this.A = false;
    this.B = true;
    const tmp = this.B_txt;
    this.B_txt = this.A_txt;
    this.A_txt = tmp;
  }

}
