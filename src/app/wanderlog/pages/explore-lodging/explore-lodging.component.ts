import {Component, OnInit} from '@angular/core';
import { TravelService } from "../../services/travel.service";
import { BaseService} from "../../../shared/services/base.service";

@Component({
  selector: 'app-explore-lodging',
  templateUrl: './explore-lodging.component.html',
  styleUrl: './explore-lodging.component.css'
})
export class ExploreLodgingComponent {
  hotel: any;
  searchQuery: string = '';
  selectedHotel: any = null;

    constructor(private travelService: TravelService, private baseService: BaseService) { }

    ngOnInit() {
        this.travelService.getHotel().subscribe(data => {
            this.hotel = data;
        });
    }
    selectHotel(hotel: any) {
        if (this.selectedHotel === hotel) {
            this.selectedHotel = null;
        } else {
            this.selectedHotel = hotel;
        }
        this.baseService.changeHotel(this.selectedHotel);
    }
    search() {
        if (this.searchQuery) {
            this.hotel = this.hotel.filter((hotel: any) =>
                hotel.name.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        } else {
            this.ngOnInit();
        }
    }
}
