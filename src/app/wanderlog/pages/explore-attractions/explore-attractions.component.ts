import { Component } from '@angular/core';
import { TravelService } from '../../services/travel.service';

@Component({
  selector: 'app-explore-attractions',
  templateUrl: './explore-attractions.component.html',
  styleUrl: './explore-attractions.component.css'
})
export class ExploreAttractionsComponent {
  touristicAttractions: any;

  constructor(private travelService: TravelService) { }

    ngOnInit() {
        this.travelService.getTouristicAttraction().subscribe(data => {
        this.touristicAttractions = data;
        });
    }

}
