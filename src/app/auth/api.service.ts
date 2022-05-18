import { Injectable, Output, EventEmitter} from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';
import { Observable } from 'rxjs';

@Injectable({
providedIn: 'root'
})

export class ApiService {
  redirectUrl: string | undefined;
  baseUrl: string = "http://localhost/my-homepage/php";

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(
    private httpClient : HttpClient,
  ) { }

  public userLogin(username:string, password:number) {
    return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
      .pipe(map(Users => {
        this.setToken(Users[0].name);
        this.getLoggedInName.emit(true);
        return Users;
    }));
  }

  public userRegistration(name:any, email:any, pwd:any) {
    return this.httpClient.post<any>(this.baseUrl + '/register.php', { name, email, pwd })
      .pipe(map(Users => {
        return Users;
    }));
  }

  public userEdit(id:any, name:any, email:any, pwd:any) {
    return this.httpClient.put<any>(this.baseUrl + '/edit.php?id=' + id, { name, email, pwd })
      .pipe(map(Users => {
        return Users;
    }));
  }

  public getUsers() {
    return this.httpClient.post<any>(this.baseUrl + '/select.php', {});
  }

  public getUser(id:any): Observable<any> {
    return this.httpClient.get("http://localhost/my-homepage/dashboard/users/" + id)
      .pipe(map((res:any) => {
        return res || {}
    }));
  }

  public delUser(id:number) {
    return this.httpClient.delete<any>(this.baseUrl + '/delete.php?id=' + id);
  }

  //token
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true
    }
    return false;
  }

}
