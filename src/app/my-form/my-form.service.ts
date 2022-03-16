import { Injectable } from '@angular/core';

export type myFormData = {
  fname?: string,
  lname?: string,
  fatherName?: string,
  motherName?: string,
  siterName?: string,
  age?: number,
  gender?: 'male' | 'female',
  address?: string,
}

@Injectable({
  providedIn: 'root'
})
export class MyFormService {
  private data: myFormData;

  constructor() {
    let textData = localStorage.getItem('keem-form'); // localStorage can get STR only
    if(textData){
      this.data = JSON.parse(textData);
    } else {
      this.data = {};
    }
  }

  private updateStorage(): void{
    localStorage.setItem('keem-form',JSON.stringify(this.data)); // display in F12->application->localStorage
    console.log(this.data);
  }

  update(data: myFormData): void {
    this.data = data;
    console.log(data)
    this.updateStorage();
  }

  getData(): myFormData {
    return this.data;
  }
}