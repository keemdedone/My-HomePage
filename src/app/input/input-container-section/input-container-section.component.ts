import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-container-section',
  templateUrl: './input-container-section.component.html',
  styleUrls: ['./input-container-section.component.scss']
})
export class InputContainerSectionComponent implements OnInit {
  @Input() sections:{value:number}[] | null = null; // get from input-display
  @Output() update = new EventEmitter<{index:number,value:number}>(); // to input-display.ts
  @Output() add = new EventEmitter<any>(); //output to input-display.ts
  @Output() delete = new EventEmitter<number>(); //output to input-display.ts

  constructor() { }

  ngOnInit(): void {
    return;
  }

  onUpdate(index:number,value:number): void{
    this.update.emit({index:index, value:value});
  }

  addInput(): void{
    this.add.emit(null); //this function will add {value:''} to sections:{value:number}[]
  }

  delInput(index:number): void{
    this.delete.emit(index);
  }

}
