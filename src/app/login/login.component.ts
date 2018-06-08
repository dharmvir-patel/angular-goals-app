import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoginError:boolean=false;
  isLogin:boolean=false;
  userName:string;
  userPassword:string;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  OnSubmit(){
  	if(this.userName=="demo" && this.userPassword=="demo"){
  		//localStorage.setItem('userToken','');
        //this.router.navigate(['/home']);
        this.isLoginError = false;
        this.isLogin = true;
        //this.router.navigate(['/members']);
  	}
  	else{
  		this.isLogin = false;
  		this.isLoginError = true;
  	}
  	
  }

}
