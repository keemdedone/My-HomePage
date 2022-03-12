import { Component, OnInit } from '@angular/core';
import { InputSection, InputService } from '../../input.service';

@Component({
  selector: 'app-input-display',
  templateUrl: './input-display.component.html',
  styleUrls: ['./input-display.component.scss']
})
export class InputDisplayComponent implements OnInit {

  constructor(
    public readonly inputService: InputService,
    ) { }

  ngOnInit(): void {
    return;
  }

  totalInput(items:InputSection): number{
    return items.reduce((carry,item) => carry + item.value,0)
  }

}
