import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  List,
  CovidDay,
  Articles,
  parseNewsList,
  parseCovidDayList,
  CovidProvince,
  parseTimeLineCasesAll,
  parseProvinceList,
  CovidTimelineCasesAll,
} from '../model/covid';

const urlNews = 'https://newsapi.org/v2/everything?q=โควิด&apiKey=14d38d8d7fed4e52ac551060f40bbd16';
const urlAll = 'https://covid19.ddc.moph.go.th/api/Cases/today-cases-all';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getAllNews(): Observable<Array<Articles>> {
    return this.http.get(urlNews).pipe(map((data) => parseNewsList(data)));
  }

  getAllDay(): Observable<List<CovidDay>> {
    return this.http
      .get(urlAll)
      .pipe(map((data) => parseCovidDayList(data)));
  }
}
