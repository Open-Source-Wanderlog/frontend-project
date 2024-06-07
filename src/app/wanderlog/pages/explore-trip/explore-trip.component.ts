import { Component } from '@angular/core';
import { TravelService } from "../../services/travel.service";

@Component({
  selector: 'app-explore-trip',
  templateUrl: './explore-trip.component.html',
  styleUrls: ['./explore-trip.component.css']
})
export class ExploreTripComponent {
  travelDestinations: any;
  flyCompany: any;

  constructor(private travelService: TravelService) { }

  ngOnInit() {
    this.travelService.getTravelDestinations().subscribe(data => {
      this.travelDestinations = data;
    });

    this.travelService.getFlyCompany().subscribe(data => {
      this.flyCompany = data;
    });
  }
}