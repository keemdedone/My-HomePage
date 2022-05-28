import { Component, Input, OnInit } from '@angular/core';
import { Popular } from 'src/app/model/movie';

@Component({
  selector: 'app-movie-popular',
  templateUrl: './movie-popular.component.html',
  styleUrls: ['./movie-popular.component.scss']
})
export class MoviePopularComponent implements OnInit {
  @Input() data: Popular | null =null ;

  constructor() { }

  ngOnInit(): void {
    return
  }

}
