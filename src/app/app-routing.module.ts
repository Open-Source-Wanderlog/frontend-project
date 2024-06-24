import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './public/pages/landingpage/landingpage.component';
import { LoginComponent } from './wanderlog/pages/login/login.component';
import { RegisterComponent } from './wanderlog/pages/register/register.component';
import { ForgotPasswordComponent } from './wanderlog/pages/forgot-password/forgot-password.component';
import { BodyContentComponent } from './wanderlog/pages/Homepages/body-content/body-content.component';
import {ExploreTripComponent} from "./wanderlog/pages/explore-trip/explore-trip.component";
import {ExploreLodgingComponent} from "./wanderlog/pages/explore-lodging/explore-lodging.component";
import {ExploreAttractionsComponent} from "./wanderlog/pages/explore-attractions/explore-attractions.component";
import {UserProfileComponent} from "./wanderlog/pages/user-profile/user-profile.component";
import {SubscriptionComponent} from "./wanderlog/pages/subscription/subscription.component";

const routes: Routes = [
  {
    path: '',
    component: LandingpageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'home',
    component: BodyContentComponent
  },
  {
        path: 'explore-trip',
        component: ExploreTripComponent
  },
  {
        path: 'explore-lodging',
        component: ExploreLodgingComponent
  },
  {
    path: 'explore-attractions',
    component: ExploreAttractionsComponent
  },
  {
    path: 'user-profile',
    component: UserProfileComponent
  },
  {
    path: 'subscription',
    component: SubscriptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
