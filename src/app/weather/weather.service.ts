import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CITYSELECT, parseWeather, WEATHER } from '../model/weather';

const WEATHER_API = 'http://api.openweathermap.org/data/2.5/weather?appid=d9e3f33539b4582e668b5097b2428c17'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  getWeather(params?: CITYSELECT): Observable<WEATHER>{
    return this.http.get(WEATHER_API,{
      params: params,
      }).pipe(map((data) => parseWeather(data)),
    )
  }

}
