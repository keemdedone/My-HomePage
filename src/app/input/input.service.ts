import { Injectable } from '@angular/core';

export type InputItem = {value: number};
export type InputSection = InputItem[];
export type InputData = InputSection[];

@Injectable({
  providedIn: 'root'
})
export class InputService {

  private data: InputData;

  constructor() {
    let textData = localStorage.getItem('INPUT'); // localStorage can get STR only
    if(textData){
      this.data = JSON.parse(textData);
    } else {
      this.data = [[{value:0}]];
      // this.updateStorage();
    }
  }

  private updateStorage(): void{
    localStorage.setItem('INPUT',JSON.stringify(this.data));
  }

  updateItem(sectionIndex:number,index:number,value:number): void{
    this.data[sectionIndex][index].value = value;
    this.updateStorage();
  }

  addItem(sectionIndex:number): void{
    this.data[sectionIndex].push({value:0});
    this.updateStorage();
  }

  removeItem(sectionIndex:number,index:number): void{
    this.data[sectionIndex].splice(index,1);
    this.updateStorage();
  }

  addSection(): void{
    this.data.push([{value:0}]);
    this.updateStorage();
  }

  removeSection(sectionIndex:number): void{
    this.data.splice(sectionIndex,1);
    this.updateStorage();
  }

  getData(): InputData{
    return this.data;
  }
}
