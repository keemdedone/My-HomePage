import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/auth/api.service';

@Component({
  selector: 'app-music-drop',
  templateUrl: './music-drop.component.html',
  styleUrls: ['./music-drop.component.scss']
})
export class MusicDropComponent implements OnInit {

  authLevel = localStorage.getItem('token');
  music_list: any[] | null = null;
  music_name_list!: FormGroup;

  constructor(
    private dataService: ApiService,
    public dialog: MatDialog,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.dataService.getMusic().subscribe((res:any) => {
      this.music_list = res ;
    }, (err) => {
      console.log(err);
    })

    if(this.authLevel !== "admin"){
      alert("you don't have permission to use this function!!!");
      this.dialog.closeAll();
    }
  }

  onDel(index:number){
    if (confirm('Are you sure you want to delete this music into the database?')) {
      this.dataService.delMusic(index+1).subscribe(()=>{
        console.log('This music deleted.')
        this.dataService.getMusic().subscribe((res:any) => {
          this.music_list = res ;
        }, (err) => {
          console.log(err);
        })
      })
    } else {
      console.log('Admin cancel delete.');
    }
  }

}
