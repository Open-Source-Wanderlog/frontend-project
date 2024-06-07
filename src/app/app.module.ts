import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './public/pages/landingpage/landingpage.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgOptimizedImage} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './wanderlog/pages/login/login.component';
import { RegisterComponent } from './wanderlog/pages/register/register.component';
import { ForgotPasswordComponent } from './wanderlog/pages/forgot-password/forgot-password.component';
import {HttpClientModule} from "@angular/common/http";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbar} from "@angular/material/toolbar";
import { BodyContentComponent } from './wanderlog/pages/Homepages/body-content/body-content.component';
import {MatButton} from "@angular/material/button";
import {ToolbarContentComponent} from "./wanderlog/components/toolbar-content/toolbar-content.component";

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ToolbarContentComponent,
    BodyContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbar,
    MatButton
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
