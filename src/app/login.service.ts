import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IUsers } from './users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //@TODO define these in a config file.
  private _url: string = 'assets/data/users.json';
  //@TODO define these in a config file.

  constructor(private http: HttpClient) { }

  loginUser(userName,userPassword):Observable<IUsers>{
    //return your output here.
    //return this.http.post<IUsers>(this._url,{username:userName,password:userPassword});
  	return this.http.get<IUsers>(this._url);
  }
  getLoggedInUserData(){
    //get current loogedIn userdata.
    return this.http.get<IUsers>(this._url);
  }
  isUserLoggedIn(){
    if (localStorage.getItem('userToken') ) {
      return true;
    }
    return false;
  }
  setUserLoggedOut(){
    //unset token 
    localStorage.removeItem('userToken')
  }
}
