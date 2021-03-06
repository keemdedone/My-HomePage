import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Game, List, parseGameList, SearchData } from '../model/game';

const GAME_API = 'https://api.rawg.io/api/games?key=8005458929174100beea6dbdb8edf82c';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  // private _loading = new BehaviorSubject<boolean>(false);
  // public readonly loading$ = this._loading.asObservable();

  constructor(
    private readonly http: HttpClient,
  ) { }

  getGame(params?: SearchData): Observable<List<Game>>{
    return this.http.get(GAME_API,{
      params: params,
      }).pipe(map((data) => parseGameList(data)),
    )
  }

  // show() {
  //   this._loading.next(true);
  // }

  // hide() {
  //   this._loading.next(false);
  // }
  
}
