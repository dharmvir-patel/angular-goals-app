import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private goals = new BehaviorSubject<any>(['The initial goal', 'Another Life Goal']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal){
  	this.goals.next(goal);
  }
}
