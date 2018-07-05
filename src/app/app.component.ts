import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'app';
  loginNavText:string;
  date = new Date();
  term:string;
  constructor(private loginService : LoginService, private router:Router) { }

  ngOnInit() {
  	if(this.loginService.isUserLoggedIn()){
  		this.loginNavText = 'My Account';
  	}
  	else{
  		this.loginNavText = 'Login';
  	}
  }
  doSearch(){
    this.router.navigate(['/search'],{queryParams:{term:this.term}});
  }

}
