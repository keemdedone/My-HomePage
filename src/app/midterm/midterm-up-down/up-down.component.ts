import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-up-down',
  templateUrl: './up-down.component.html',
  styleUrls: ['./up-down.component.scss']
})
export class UpDownComponent implements OnInit {

  constructor() { }

  ary = ["A","B","C","D","E","F"] ;

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

  up(n:number): void{
    const tmp = this.ary[n-1];
    this.ary[n-1] = this.ary[n];
    this.ary[n] = tmp;
  }

  down(n:number): void{
    const tmp = this.ary[n+1];
    this.ary[n+1] = this.ary[n];
    this.ary[n] = tmp;
  }

  checkUp(n:number): any{
    if( n == 0 ){
      return true;
    }
  }

  checkDown(n:number): any{
    if( n == this.ary.length-1 ){ //index start from 0
      return true;
    }
  }

}
