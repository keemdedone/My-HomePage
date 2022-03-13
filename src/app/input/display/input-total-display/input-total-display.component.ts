import { Component, OnInit } from '@angular/core';
import { InputSection, InputService } from '../../input.service';

@Component({
  selector: 'app-input-total-display',
  templateUrl: './input-total-display.component.html',
  styleUrls: ['./input-total-display.component.scss']
})
export class InputTotalDisplayComponent implements OnInit {

  constructor(
    public readonly  dataService: InputService,
  ) { }

  ngOnInit(): void {
    return;
  }

  display(items:InputSection): number{
    return items.reduce((carry,item)=> carry + item.value,0)
  }

}
