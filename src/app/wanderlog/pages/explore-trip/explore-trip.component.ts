import { Component } from '@angular/core';
import { TravelService } from "../../services/travel.service";
import { BaseService} from "../../../shared/services/base.service";

@Component({
  selector: 'app-explore-trip',
  templateUrl: './explore-trip.component.html',
  styleUrls: ['./explore-trip.component.css']
})
export class ExploreTripComponent {
  travelDestinations: any;
  flyCompany: any;
  searchQuery: string = '';
  selectedDestination: any = null;
  selectedFlyCompany: any = null;

  constructor(private travelService: TravelService, private baseService: BaseService) { }

  ngOnInit() {
    this.travelService.getTravelDestinations().subscribe(data => {
      this.travelDestinations = data;
    });

    this.travelService.getFlyCompany().subscribe(data => {
      this.flyCompany = data;
    });
  }
  selectDestination(destination: any) {
    if (this.selectedDestination === destination) {
      this.selectedDestination = null;
    } else {
      this.selectedDestination = destination;
    }
    this.baseService.changeDestination(this.selectedDestination);
  }

  selectCompany(company: any) {
    this.baseService.changeDestination(company);
  }

  selectFlyCompany(flyCompany: any) {
    if (this.selectedFlyCompany === flyCompany) {
      this.selectedFlyCompany = null;
    } else {
      this.selectedFlyCompany = flyCompany;
    }
    this.baseService.changeFlyCompany(this.selectedFlyCompany);
  }
  search() {
    if (this.searchQuery) {
      this.travelDestinations = this.travelDestinations.filter((destination: any) =>
          destination.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      this.flyCompany = this.flyCompany.filter((company: any) =>
          company.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.ngOnInit();
    }
  }
}