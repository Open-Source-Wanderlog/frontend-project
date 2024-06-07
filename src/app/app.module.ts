import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './public/pages/landingpage/landingpage.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgOptimizedImage} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton} from "@angular/material/button";
import {ToolbarContentComponent} from "./wanderlog/components/toolbar-content/toolbar-content.component";
import { BodyContentComponent } from './wanderlog/pages/homepages/body-content/body-content.component';

@NgModule({
    declarations: [
        AppComponent,
        LandingpageComponent,
        ToolbarContentComponent,
        ToolbarContentComponent,
        BodyContentComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgOptimizedImage,
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
