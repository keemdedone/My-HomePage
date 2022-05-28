import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Popular } from 'src/app/model/movie';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'app-movie-popular-page',
  templateUrl: './movie-popular-page.component.html',
  styleUrls: ['./movie-popular-page.component.scss']
})
export class MoviePopularPageComponent implements OnInit {

  data$!: Observable<Popular>;

  constructor(
    private readonly service: MovieService,
  ) { }

  ngOnInit(): void {
    this.data$ = this.service.getPopularMovie();
  }

}
