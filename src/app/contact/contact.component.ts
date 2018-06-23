import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

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

  constructor() { }

  ngOnInit() {
  }

  getNameErrorMessage() {

    return this.name.hasError('required') ? 'You must enter a value' : '';
  }
  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' : this.email.hasError('email') ? 'Not a valid email' : '';
  }
  contactUs(){
  	if(this.name.valid &&  this.email.valid ){
      this.isSussess = true;
  		console.log("Success"+this.name.value);
      console.log("Success"+this.email.value);
      console.log("Success"+this.phone.value);
      console.log("Success"+this.message.value);

    }
  }
}
