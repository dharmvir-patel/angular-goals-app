import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from './../login.service';


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
  userData:any;

  constructor(private router:Router,private loginService : LoginService) { }

  ngOnInit() {
   
  }

  OnSubmit(){
    if(this.userName=="demo" && this.userPassword=="demo"){
      this.loginService.loginUser(this.userName,this.userPassword)
        .subscribe(res => {
          this.userData = res;
          //console.log(this.userData);
          this.isLoginError = false;
          this.isLogin = true;
          localStorage.setItem('userToken',res.accesstoken);
          //this.router.navigate(['/home']);
         },
         (err : HttpErrorResponse)=>{ 
            this.isLogin = false;
            this.isLoginError = true;
         }
        );
  	}
  	else{
  		this.isLogin = false;
  		this.isLoginError = true;
  	}
  	console.log(localStorage.getItem('userToken'));
  }
  logout(){
    //unset localStoarge userToken
    localStorage.removeItem('userToken');
    this.isLogin = false;
  }  

}
