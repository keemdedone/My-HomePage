import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { List, parsePeopleList, parsePerson, parsePlanet, parsePlanetsList, parseSpecies, parseSpeciesList, person, planet, SearchData, species } from './models/models';

const PeopleURL = 'https://swapi.dev/api/people/'
const PlanetURL = 'https://swapi.dev/api/planets/'
const SpeciesURL = 'https://swapi.dev/api/species/'

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

  getAllPlanets(params?: SearchData): Observable<List<planet>>{
    return this.http.get(PlanetURL,{
      params: params,
      }).pipe(map((data) => parsePlanetsList(data)),
    );
  }

  getPlanet(id: string): Observable<planet>{
    return this.http.get(`${PlanetURL}${id}/`).pipe(map((data) => parsePlanet(data)))
  }

  getAllSpeices(params?: SearchData): Observable<List<species>>{
    return this.http.get(SpeciesURL,{
      params: params,
      }).pipe(map((data) => parseSpeciesList(data)),
    );
  }

  getSpecies(id: string): Observable<species>{
    return this.http.get(`${SpeciesURL}${id}/`).pipe(map((data) => parseSpecies(data)))
  }

}
