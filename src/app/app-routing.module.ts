import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FullContactComponent } from './full-contact/full-contact.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
	{ path:'', component: HomeComponent },
	{ path:'about/:id', component: AboutComponent},
	{ path:'members', component: FullContactComponent,canActivate: [AuthGuard]},
	{ path:'login', component: LoginComponent},
	{ path:'contact-us', component: ContactComponent},
	{ path:'search', component: SearchComponent},
	{ path:'**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
