import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { parsePopularList, Popular} from '../model/movie';

const POPULAR_API = 'https://api.themoviedb.org/3/movie/popular?api_key=653ec54a2a1827de213d36c652ee4f51'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  getPopularMovie(): Observable<Popular>{
    return this.http
      .get(POPULAR_API)
      .pipe(map((data) => parsePopularList(data)));
  }

}
