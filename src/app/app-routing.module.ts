import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './public/pages/landingpage/landingpage.component';
import { LoginComponent } from './wanderlog/pages/login/login.component';
import { RegisterComponent } from './wanderlog/pages/register/register.component';
import { ForgotPasswordComponent } from './wanderlog/pages/forgot-password/forgot-password.component';
import { BodyContentComponent } from './wanderlog/pages/Homepages/body-content/body-content.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
