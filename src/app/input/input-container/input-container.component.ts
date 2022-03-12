import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-container',
  templateUrl: './input-container.component.html',
  styleUrls: ['./input-container.component.scss']
})
export class InputContainerComponent implements OnInit {

  @Input() value: number | null = null; // this val come from input-contanier-section.ts
  @Output() update = new EventEmitter<number>(); // number beacuse i need to update value type number from input

  constructor() { }

  ngOnInit(): void {
    return
  }

  onUpdateValue(value:number): void {
    this.update.emit(value); // this function will send val to update total in input-contanier-section.ts
  }

}
