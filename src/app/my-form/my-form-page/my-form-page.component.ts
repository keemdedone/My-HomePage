import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { myFormData, song } from '../my-form.service';

@Component({
  selector: 'app-my-form-page',
  templateUrl: './my-form-page.component.html',
  styleUrls: ['./my-form-page.component.scss'],
})
export class MyFormPageComponent implements OnInit {
  @Input() data!: myFormData;
  @Output() update = new EventEmitter<myFormData>();

  formGroup!: FormGroup;
  value: any | null = null; //for check console.log()

  private readonly createSong = (song: song | null) =>
  this.fb.group({
    artist: [song?.artist || null,[Validators.required]],
    name: [song?.name || null,[Validators.required]],
    nationality: [song?.nationality || null,[Validators.required]],
  })

  constructor(
    private readonly fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      fname: [null,[Validators.required]],
      lname:  [null,[Validators.required]],
      age: [null,[Validators.required]],
      gender: [null,[Validators.required]],
      address: [null,[Validators.required]],
      music: this.fb.array((this.data?.music || []).map(this.createSong))
    })
  }

  get music(): FormArray {
    return this.formGroup.get('music') as FormArray;
  }

  addMusic(): void{
    this.music.push(this.createSong(null))
  }

  deleteMusic(index:number): void{
    this.music.removeAt(index)
  }

  onSubmit(): void{
    this.formGroup.updateValueAndValidity();
    if(this.formGroup.invalid){
      this.formGroup.markAllAsTouched();
    } else {
      this.value = this.formGroup.value //for check console.log()
      console.log(this.value)
      this.update.emit(this.value)
    }
  }

  onReset(): void{
    this.formGroup.reset();
  }

}
