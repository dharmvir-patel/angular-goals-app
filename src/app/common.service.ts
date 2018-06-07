import { Injectable } from '@angular/core';
import { HttpClient,HttpInterceptor,HttpRequest,HttpHandler,HttpResponse,HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class CommonService implements HttpInterceptor {

  //@TODO get this value from user session.
  private _authToken : string = 'Bearer 7BDEgBoMfxt0WSQMJ2rkcziDo5bEeVae';
  //@TODO get this value from user session.

  constructor(private http:HttpClient) { }
  intercept(req: HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
  	//add your interceptors code here 
  	const authReq = req.clone({
  		headers : req.headers.set('Authorization',this._authToken)
  	});
  	return next.handle(authReq);
  }
}
