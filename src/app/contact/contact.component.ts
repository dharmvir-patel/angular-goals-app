import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  name  = new FormControl('', [Validators.required]);
  phone = new FormControl('');
  message = new FormControl('');
  isSussess:boolean=false;
  _apiUrl:string = 'http://www.digitalcahoots.com/contactengine.php';
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  getNameErrorMessage() {

    return this.name.hasError('required') ? 'You must enter a value' : '';
  }
  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' : this.email.hasError('email') ? 'Not a valid email' : '';
  }
  contactUs():void{
  	if(this.name.valid &&  this.email.valid ){
      
      this.http.post<any>(this._apiUrl,{Email:this.email.value,Name:this.name.value,Message:this.message.value,Phone:this.phone.value})
  		.subscribe(res=>console.log(res));

      this.isSussess = true;
      this.name.reset();
      this.email.reset();
      this.phone.reset();
      this.message.reset();

    }
  }
}
