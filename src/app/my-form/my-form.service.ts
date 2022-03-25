import { Injectable } from '@angular/core';

export type myFormData = {
  fname?: string | null,
  lname?: string | null,
  age?: number | null,
  gender?: 'male' | 'female'| null,
  address?: string | null,
  music?: song[],
}

export type song = {
  artist: string,
  name: string,
  nationality: string,
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
  }

  update(data: myFormData): void {
    this.data = data;
    this.updateStorage();
  }

  getData(): myFormData {
    return this.data;
  }
}
