import { Component, OnInit } from '@angular/core';
import { FullContactService } from './../full-contact.service';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-full-contact',
  templateUrl: './full-contact.component.html',
  styleUrls: ['./full-contact.component.scss']
})
export class FullContactComponent implements OnInit {
  
  fullContacts:any;
  itemCount:number=1;
  searchText:string;
  showSpinner:boolean = false;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private _fullContact:FullContactService,private router:Router) { }

  ngOnInit() {
  	// if (localStorage.getItem('userToken')) {
   //      // logged in so return true
   //      return true;
   //  }
   //  // not logged in so redirect to login page with the return url
   //  this.router.navigate(['/login']);
   //  return false;
  }

  searchPeople(){
    if(this.email.valid){
      //show spinner
      this.showSpinner = true;
    	//get data from fullContact service ;
      this._fullContact.getFullContact(this.searchText)
      .subscribe( res => this.fullContacts=res );
      //hide spinner
      setTimeout(()=>{
        this.showSpinner = false;
      },2000)
    }
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'This field can not be left blank.' :
        this.email.hasError('email') ? 'Please enter a valid email.' :
            '';
  }

}
