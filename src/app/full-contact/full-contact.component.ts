import { Component, OnInit } from '@angular/core';
import { FullContactService } from './../full-contact.service';
 
@Component({
  selector: 'app-full-contact',
  templateUrl: './full-contact.component.html',
  styleUrls: ['./full-contact.component.scss']
})
export class FullContactComponent implements OnInit {
  
  public fullContacts = [];
  itemCount:number;

  constructor(private _fullContact:FullContactService) { }

  ngOnInit() {
  	this._fullContact.getFullContact()
  	.subscribe( res => this.fullContacts=res );
  	this.itemCount = this.fullContacts.length;
  }

  searchPeople(){
  	console.log('Search From Submitted.');
  }

}
