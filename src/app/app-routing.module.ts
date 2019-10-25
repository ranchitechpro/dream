import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { OfferComponent } from './components/offer/offer.component';
import { RegisterComponent } from './components/register/register.component';



const routes: Routes = [

  { path: 'home',        component: HomepageComponent,    data: { title: 'Home Page' }      },
  { path: ' ',        component: HomepageComponent,    data: { title: 'Home Page' }      },
  { path: 'register',  component: RegisterComponent,      data: { title: 'User Signup' }         } ,
  { path: 'offerinfo',  component: OfferComponent,      data: { title: 'Offer Information' }         } 
  
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
