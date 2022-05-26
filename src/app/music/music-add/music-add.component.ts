import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/auth/api.service';

@Component({
  selector: 'app-music-add',
  templateUrl: './music-add.component.html',
  styleUrls: ['./music-add.component.scss']
})

export class MusicAddComponent implements OnInit {
  musicForm: FormGroup;

  authLevel = localStorage.getItem("token");

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private dataService: ApiService,
  ) {
    this.musicForm = this.fb.group({
      name: [null, Validators.required],
      url: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    if(this.authLevel !== "admin"){
      alert("you don't have permission to use this function!!!");
      history.back();
    }

    
  }

  postdata(musicForm1:
    { value:
      {
        name: string,
        url: string,
      };
    }): void{
      if (!this.musicForm.invalid) {
        this.dataService.musicCreate(musicForm1.value.name,'../assets/music/' + musicForm1.value.url + '.m4a').subscribe(
          (data:any) => {
            console.log(data);
          },(err:any) => {
            console.log(err);
          }
        )
      } else {
        return
      }
    }

  onReset(): void{
    this.musicForm.reset();
  }

}
