import { Component } from '@angular/core';
import { TravelService } from "../../services/travel.service";

@Component({
  selector: 'app-explore-lodging',
  templateUrl: './explore-lodging.component.html',
  styleUrl: './explore-lodging.component.css'
})
export class ExploreLodgingComponent {
  hotel: any;

    constructor(private travelService: TravelService) { }

    ngOnInit() {
        this.travelService.getHotel().subscribe(data => {
            this.hotel = data;
        });
    }
}
