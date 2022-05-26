import { Component, OnInit  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MusicAddComponent } from '../music-add/music-add.component';

@Component({
  selector: 'app-music-play',
  templateUrl: './music-play.component.html',
  styleUrls: ['./music-play.component.scss']
})
export class MusicPlayComponent implements OnInit {

  music_num: any = parseInt(localStorage.getItem('music') || "0".toString());
  audio = new Audio();

  path: Array<{id: number,name: string, url: string}> = [
    {id: 1,name: 'On Ourway', url: "../assets/music/OnOurway.m4a"},
    {id: 2,name: 'The Cetra', url: "../assets/music/AerithTheme.m4a"},
    {id: 3,name: 'Somnus', url: "../assets/music/Somnus.m4a"},
  ];

  play: boolean = true;
  select_num: number = 0;

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    return
  }

  onPlay(){
    this.audio.src = this.path[this.music_num].url;
    localStorage.setItem('music',this.music_num.toString());
    this.audio.load();
    this.audio.play();
    this.play = false;
  }

  onPause(){
    this.audio.pause();
    this.play = true;
  }

  onNext(){
    this.audio.pause();
    this.audio.currentTime = 0;
    this.play = true;
    if(this.music_num == this.path.length - 1){
      this.music_num = this.path.length - 1
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

}
