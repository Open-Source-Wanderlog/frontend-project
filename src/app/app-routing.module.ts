import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './public/pages/landingpage/landingpage.component';
import { BodyContentComponent} from "./wanderlog/pages/Homepages/body-content/body-content.component";

const routes: Routes = [
  {
    path: '',
    component: BodyContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
