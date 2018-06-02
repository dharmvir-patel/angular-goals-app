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

  constructor(private _fullContact:FullContactService) { }

  ngOnInit() {
  	
  }

  searchPeople(){
  	//console.log(this.searchText);
    this._fullContact.getFullContact(this.searchText)
    .subscribe( res => this.fullContacts=res );
  }

}
