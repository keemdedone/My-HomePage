import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { parsePopularList, Popular, SearchData} from '../model/movie';

const POPULAR_API = 'https://api.themoviedb.org/3/movie/popular?api_key=653ec54a2a1827de213d36c652ee4f51'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=653ec54a2a1827de213d36c652ee4f51&query='

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  getPopularMovie(params?: SearchData): Observable<Popular>{
    return this.http.get(POPULAR_API,{
      params: params,
      }).pipe(map((data) => parsePopularList(data)),
    );
  }

}
