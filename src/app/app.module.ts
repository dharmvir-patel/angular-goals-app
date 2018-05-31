import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataService } from './data.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { FullContactComponent } from './full-contact/full-contact.component';
import { CommonService } from './common.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FullContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
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
