import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchTerm:string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  	// subscribe to router event
    this.activatedRoute.queryParams.subscribe((params: Params) => {
        this.searchTerm = params['term'];
      });
    //@TODO
    // make search API call and return search results to template.
    console.log(this.searchTerm);
    //
  }

}
