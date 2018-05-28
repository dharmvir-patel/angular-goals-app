import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IFullContact } from './fullcontact';

@Injectable({
  providedIn: 'root'
})
export class FullContactService {
  
  private _url: string = 'assets/data/fullcontact.json';
  constructor(private http: HttpClient) { }

  getFullContact():Observable<IFullContact[]>{
  	return this.http.get<IFullContact[]>(this._url);
  }
}
