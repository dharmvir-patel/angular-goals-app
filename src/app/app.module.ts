import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataService } from './data.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { FullContactComponent } from './full-contact/full-contact.component';
import { CommonService } from './common.service';
import { AppMaterialModule } from './app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FullContactComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    DataService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:CommonService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
