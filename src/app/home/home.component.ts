import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  itemCount: number;
  btnText: string = 'Add an Item';
  goalText: string;
  goals = [];
  constructor() { }

  ngOnInit() {
  	this.itemCount = this.goals.length;
  }
  addItem(){
  	this.goals.push(this.goalText);
  	this.goalText = '';
  	this.itemCount = this.goals.length;
  }
  removeItem(i){
  	this.goals.splice(i,1);
  	this.itemCount = this.goals.length;
  }

}
