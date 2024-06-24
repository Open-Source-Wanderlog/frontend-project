import { Component } from '@angular/core';
import {TravelService} from "../../services/travel.service";


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  user: any;
  subscriptions: any;

  constructor(private travelService: TravelService) { }

  ngOnInit(): void {
    this.travelService.getUser(1).subscribe(data => {
      this.user = data;
    });
    this.travelService.getUserSubscriptions(1).subscribe(data => {
      this.subscriptions = data;
      this.subscriptions.forEach((subscription:any) => {
        this.travelService.getPlanDetails(subscription.plans_id).subscribe(planDetails => {
          subscription.planDetails = planDetails;
        });
      });
    });
  }
}
