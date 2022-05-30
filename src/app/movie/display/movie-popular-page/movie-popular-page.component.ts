import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Popular, SearchData } from 'src/app/model/movie';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'app-movie-popular-page',
  templateUrl: './movie-popular-page.component.html',
  styleUrls: ['./movie-popular-page.component.scss']
})
export class MoviePopularPageComponent implements OnInit {
  data$!: Observable<Popular>;
  search!: SearchData;

  constructor(
    private readonly service: MovieService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.search = this.route.snapshot.queryParams
    this.data$ = this.route.queryParams.pipe(
      switchMap((params) => {
        this.search = params;
        return this.service.getPopularMovie(params);
      })
    )
  }

  onSearch(search:SearchData): void{
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: search,
      replaceUrl: true,
    })
  }

}
