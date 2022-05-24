import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-music-play',
  templateUrl: './music-play.component.html',
  styleUrls: ['./music-play.component.scss']
})
export class MusicPlayComponent implements OnInit {

  audio = new Audio();

  constructor() { }

  ngOnInit(): void {
    return
  }

  onPlay(){
    this.audio.src = "../assets/music/15-OnOurway.m4a";
    this.audio.load();
    this.audio.play();
  }

  onPause(){
    this.audio.pause();
  }

}
