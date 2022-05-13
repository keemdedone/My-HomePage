import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  List,
  CovidDay,
  Articles,
  parseNewsList,
  CovidProvince,
  parseProvinceList,
  parseCovidDayList,
  CovidTimelineCasesAll,
  parseTimeLineCasesAll,
} from '../model/covid';

const urlNews = 'https://newsapi.org/v2/everything?q=โควิด&apiKey=14d38d8d7fed4e52ac551060f40bbd16';
const urlAllProvinces = 'https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces';
const urlAllDay = 'https://covid19.ddc.moph.go.th/api/Cases/today-cases-all';
const urlAll = 'https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-all';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  getAllProvinces(): Observable<List<CovidProvince>> {
    return this.http
      .get(urlAllProvinces)
      .pipe(map((data) => parseProvinceList(data)));
  }

  getAllNews(): Observable<Array<Articles>> {
    return this.http
      .get(urlNews)
      .pipe(map((data) => parseNewsList(data)));
  }

  getAllDay(): Observable<List<CovidDay>> {
    return this.http
      .get(urlAllDay)
      .pipe(map((data) => parseCovidDayList(data)));
  }

  timelineCasesAll(): Observable<CovidTimelineCasesAll> {
    return this.http
      .get(urlAll)
      .pipe(map((data) => parseTimeLineCasesAll(data)));
  }


}
