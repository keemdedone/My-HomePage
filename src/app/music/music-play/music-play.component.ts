import { Component, OnInit  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/auth/api.service';
import { MusicAddComponent } from '../music-add/music-add.component';
import { MusicDropComponent } from '../music-drop/music-drop.component';

@Component({
  selector: 'app-music-play',
  templateUrl: './music-play.component.html',
  styleUrls: ['./music-play.component.scss']
})
export class MusicPlayComponent implements OnInit {

  music_num: any = parseInt(localStorage.getItem('music') || '0');
  audio = new Audio();

  play: boolean = true;
  music_list: any;

  constructor(
    private dialog: MatDialog,
    private dataService: ApiService,
  ) { }

  ngOnInit(): void {
    this.dataService.getMusic().subscribe((res:any) => {
      if (this.music_num > res.length - 1 ){
        localStorage.setItem('music','0');
        location.reload();
      }
      this.music_list = res ;
    }, (err) => {
      console.log(err);
    });
  }

  onPlay(){
    this.dataService.getMusic().subscribe((res:any) => {
      this.audio.src = res[this.music_num].path;
      localStorage.setItem('music',this.music_num.toString());
      this.audio.load();
      this.audio.play();
      this.play = false;
    })
  }

  onPause(){
    this.audio.pause();
    this.play = true;
  }

  onNext(){
    this.play = true;
    this.audio.pause();
    this.audio.currentTime = 0;
    if(this.music_num == this.music_list.length - 1){
      this.music_num = this.music_list.length - 1
    } else {
      this.music_num += 1;
    }
  }

  onPrevious(){
    this.audio.pause();
    this.audio.currentTime = 0;
    this.play = true;
    if(this.music_num > 0){
      this.music_num -= 1;
    } else {
      this.music_num = 0;
    }
  }

  onChange(id:number){
    this.audio.pause();
    this.audio.currentTime = 0;
    this.play = true;
    this.music_num = id - 1;
  }

  openCreateDialog(): void {
    this.dialog.open(MusicAddComponent, {});
  }

  openDropDialog(): void{
    this.dialog.open(MusicDropComponent, {});
  }

  vol(ev: any) {
    console.log(ev);
    let vol = ev.target.ariaValueNow/100;
    this.audio.volume = vol ;
  }

}
