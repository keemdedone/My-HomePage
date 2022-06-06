import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { CITYSELECT, WEATHER } from 'src/app/model/weather';
import { WeatherService } from '../../weather.service';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.scss']
})
export class WeatherPageComponent implements OnInit {
  data$!: Observable<WEATHER>;
  search!: CITYSELECT;

  constructor(
    private readonly service: WeatherService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.search = this.route.snapshot.queryParams;
    this.data$ = this.route.queryParams.pipe(
      switchMap((params) => {
        this.search = params;
        return this.service.getWeather(params);
      })
    )
  }

  onSearch(search:CITYSELECT): void{
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { q: search.city},
      replaceUrl: false,
    })
  }

}
