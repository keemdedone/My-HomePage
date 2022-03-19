import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { List, parsePeopleList, parsePerson, person, SearchData } from './models/models';

const PeopleURL = 'https://swapi.dev/api/people/'

@Injectable({
  providedIn: 'root'
})
export class StarWarService {
  
  constructor(
    private readonly http: HttpClient,
  ) {}

  getAll(params?: SearchData): Observable<List<person>>{
    return this.http.get(PeopleURL,{
      params: params,
    }).pipe(map((data) => parsePeopleList(data)),
    );
  }

  get(id: string): Observable<person>{
    return this.http.get(`${PeopleURL}${id}/`).pipe(map((data) => parsePerson(data)))
  }
}
