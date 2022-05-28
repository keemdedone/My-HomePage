import { Injectable, Output, EventEmitter} from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
providedIn: 'root'
})

export class ApiService {
  redirectUrl: string | undefined;
  baseUrl: string = "http://localhost/my-homepage/php_user";
  musicUrl: string = "http://localhost/my-homepage/php_music";

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(
    private httpClient : HttpClient,
  ) {}

  public userLogin(email:string, password:number) {
    return this.httpClient.post<any>(this.baseUrl + '/login.php', { email, password })
    .pipe(map(User => {
      if (User[0].level === '0'){ //don't know why it's must identify index but if not it's can't return data
        this.setToken('admin');
      } else {
        this.setToken(User[0].id);
      }
      this.getLoggedInName.emit(true);
      return User;
    }));
  }

  public userRegistration(name:any, email:any, pwd:any) {
    return this.httpClient.post<any>(this.baseUrl + '/register.php', { name, email, pwd })
    .pipe(map(Users => {
      return Users
    }));
  }

  public userEdit(id:any, name:any, email:any, pwd:any, lv:any) {
    if(lv === null){
      lv = '2'
    }
    return this.httpClient.put<any>(this.baseUrl + '/edit.php?id=' + id, { name, email, pwd, lv })
    .pipe(map(Users => {
      return Users
    }));
  }

  public getUsers() {
    return this.httpClient.post<any>(this.baseUrl + '/select.php', {});
  }

  public getUser(id:any): Observable<any> {
    return this.httpClient.get('/dashboard/users/' + id)
    .pipe(map((res:any) => {
      return res || {}
    }));
  }

  public userLog(user_id:any, action:any) {
    if(user_id == 'admin'){
      user_id = '1' ;
    }
    return this.httpClient.post<any>(this.baseUrl + '/log.php', { user_id, action })
    .subscribe(e => {
      console.log(e)
    }, err => {
      console.log(err)
    }) //subscribe is required.
  }

  public getMusic(){
    return this.httpClient.post<any>(this.musicUrl + '/select.php', {});
  }

  public delUser(id:number) {
    return this.httpClient.delete<any>(this.baseUrl + '/delete.php?id=' + id);
  }

  public musicCreate(name:string, path:string){
    return this.httpClient.post<any>(this.musicUrl + '/create.php', { name, path })
    .pipe(map(data => {
      return data
    }));
  }

  public delMusic(id:number){
    return this.httpClient.delete<any>(this.musicUrl + '/delete.php?id=' + id);
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
      return true;
    }
    return false;
  }

}
