import { Component, OnInit } from '@angular/core';
import { BaseService} from "../../../shared/services/base.service";

@Component({
  selector: 'app-trip-result',
  templateUrl: './trip-result.component.html',
  styleUrl: './trip-result.component.css'
})
export class TripResultComponent implements OnInit{
  destination: any;
    flyCompany: any;
    hotel: any;
    attraction: any;
    totalCost: number = 0;

  constructor(private baseService: BaseService) { }

  ngOnInit() {
    this.baseService.currentDestination.subscribe(destination => {
      this.destination = destination;
    });
    this.baseService.currentFlyCompany.subscribe(flyCompany => {
      this.flyCompany = flyCompany;
      this.totalCost += flyCompany.price;
    });
    this.baseService.currentHotel.subscribe(hotel => {
      this.hotel = hotel;
        this.totalCost += hotel.price;
    });
    this.baseService.currentAttraction.subscribe(attraction => {
      this.attraction = attraction;
        this.totalCost += attraction.price;
    });
  }
}
