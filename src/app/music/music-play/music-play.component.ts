import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-music-play',
  templateUrl: './music-play.component.html',
  styleUrls: ['./music-play.component.scss']
})
export class MusicPlayComponent implements OnInit {

  audio = new Audio();

  path: Array<{id: number,name: string, url: string}> = [
    {id: 1,name: 'On ourway', url: "../assets/music/OnOurway.m4a"},
    {id: 2,name: 'The Cetra', url: "../assets/music/AerithTheme.m4a"},
    {id: 3,name: 'Somnus', url: "../assets/music/Somnus.m4a"},
  ];

  play: boolean = true;
  select_num: number = 0;
  music_num = localStorage.getItem('music') || 0;

  constructor() { }

  ngOnInit(): void {
    return
  }

  onPlay(){
    this.audio.src = this.path[this.select_num].url;
    localStorage.setItem('music',this.select_num.toString());
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
    if(this.select_num == this.path.length - 1){
      this.select_num = this.path.length - 1
    } else {
      this.select_num = this.select_num + 1;
    }
  }

  onPrevious(){
    this.audio.pause();
    this.audio.currentTime = 0;
    this.play = true;
    if(this.select_num > 0){
      this.select_num = this.select_num - 1;
    } else {
      this.select_num = 0;
    }
  }

  onChange(id:number){
    this.select_num = id - 1;
  }

}
