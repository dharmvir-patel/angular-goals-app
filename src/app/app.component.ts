import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'app';
  loginNavText:string;
  date = new Date();

  constructor(private loginService : LoginService) { }

  ngOnInit() {
  	if(this.loginService.isUserLoggedIn()){
  		this.loginNavText = 'My Account';
  	}
  	else{
  		this.loginNavText = 'Login';
  	}
  }

}
