import { Component } from '@angular/core';
import {TravelService} from "../../services/travel.service";

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})
export class SubscriptionComponent {
  plans: any;

  constructor(private travelService: TravelService) { }

  ngOnInit(): void {
    this.travelService.getPlans().subscribe(data => {
      this.plans = data;
    });
  }
}
