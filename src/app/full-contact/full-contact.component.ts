import { Component, OnInit } from '@angular/core';
import { FullContactService } from './../full-contact.service';
 
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

  constructor(private _fullContact:FullContactService) { }

  ngOnInit() {
  	
  }

  searchPeople(){
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
