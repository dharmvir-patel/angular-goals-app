import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IFullContact } from './fullcontact';

@Injectable({
  providedIn: 'root'
})
export class FullContactService {
  
  //@TODO define these in a config file.
  private _url: string = 'assets/data/fullcontact.json';
  private _apiUrl: string = 'https://api.fullcontact.com/v3/person.enrich';
  //@TODO define these in a config file.

  constructor(private http: HttpClient) { }

  getFullContact(searchText):Observable<IFullContact[]>{
    //return your output here.
  	//return this.http.post<IFullContact[]>(this._apiUrl,{email:searchText});
  	return this.http.get<IFullContact[]>(this._url);
    
  }
}
