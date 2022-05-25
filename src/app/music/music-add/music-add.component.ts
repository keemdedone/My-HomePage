import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

export type musicFormData = {
  id?: number | null,
  name?: string | null,
  url?: string | null,
}

@Component({
  selector: 'app-music-add',
  templateUrl: './music-add.component.html',
  styleUrls: ['./music-add.component.scss']
})
export class MusicAddComponent implements OnInit {
  data!: musicFormData;
  musicForm!: FormGroup;
  value: any | null = null;

  authLevel = localStorage.getItem("token");

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    if(this.authLevel !== "admin"){
      alert("you don't have permission to use this function!!!");
      history.back();
    }

    this.musicForm = this.fb.group({
      id: [null,[Validators.required]],
      name: [null,[Validators.required]],
      url: [null,[Validators.required]],
    })
  }

  onSubmit(): void{
    console.log(this.musicForm.value)
  }

  onReset(): void{
    this.musicForm.reset();
  }

}
