import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  name  = new FormControl('', [Validators.required]);
  phone = new FormControl('');
  message = new FormControl('');
  isSussess:boolean=false;
  _apiUrl:string = 'http://www.digitalcahoots.com/contactengine.php';

  setPosition:string;

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    
    var mapProp = {
      center: new google.maps.LatLng(28.6415, 77.1209),
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    /*var image = 'assets/images/map-icon.png';  */  
    var marker = new google.maps.Marker({ 
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: {lat:28.6603,lng:77.1364},
        map: this.map,//set map created here
        // icon: image,
        title:"Goals App"
    });
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        var marker2 = new google.maps.Marker({ 
          draggable: true,
          animation: google.maps.Animation.DROP,
          position: {lat:position.coords.latitude,lng:position.coords.longitude},
          map: this.map,//set map created here
          title:"You are here"
        });
      },(errorCallback)=>{console.log(errorCallback)},{timeout:10000});

    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  getNameErrorMessage() {

    return this.name.hasError('required') ? 'You must enter a value' : '';
  }
  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' : this.email.hasError('email') ? 'Not a valid email' : '';
  }
  contactUs():void{
  	if(this.name.valid &&  this.email.valid ){
      
      this.http.post<any>(this._apiUrl,{Email:this.email.value,Name:this.name.value,Message:this.message.value,Phone:this.phone.value})
  		.subscribe(res=>console.log(res));

      this.isSussess = true;
      this.name.reset();
      this.email.reset();
      this.phone.reset();
      this.message.reset();

    }
  }
}
