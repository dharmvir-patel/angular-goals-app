import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IHomeSlider } from './ihomeslider';


@Injectable({
  providedIn: 'root'
})
export class HomesliderService {
	 //@TODO define these in a config file.
     private _url: string = 'assets/data/home-slider.json';
     //@TODO 
     constructor(private http: HttpClient) { }
     getSliderData():Observable<IHomeSlider[]>{
	    //return your output here.
	  	return this.http.get<IHomeSlider[]>(this._url);
	    
	}
}
