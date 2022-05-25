import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-music-play',
  templateUrl: './music-play.component.html',
  styleUrls: ['./music-play.component.scss']
})
export class MusicPlayComponent implements OnInit {

  audio = new Audio();
  url: string[] = ["../assets/music/OnOurway.m4a","../assets/music/AerithTheme.m4a","../assets/music/Somnus.m4a"]
  play: boolean = true;
  select_num: number = 0;

  constructor() { }

  ngOnInit(): void {
    return
  }

  onPlay(){
    this.audio.src = this.url[this.select_num];
    console.log(this.select_num,this.audio.src)
    this.audio.load();
    this.audio.play();
    this.play = false;
  }

  onPause(){
    this.audio.pause();
    this.play = true;
  }

  onNext(){
    if(this.select_num = this.url.length -1){
      this.select_num = this.url.length -1
    } else {
      this.select_num = this.select_num + 1;
    }
  }

  onPrevious(){
    if(this.select_num > 0){
      this.select_num = this.select_num - 1;
    } else {
      this.select_num = 0;
    }
  }

}
