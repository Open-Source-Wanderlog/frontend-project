import { Component } from '@angular/core';
import { TravelService } from '../../services/travel.service';
import { BaseService } from '../../../shared/services/base.service';

@Component({
  selector: 'app-explore-attractions',
  templateUrl: './explore-attractions.component.html',
  styleUrl: './explore-attractions.component.css'
})
export class ExploreAttractionsComponent {
  touristicAttractions: any;
  searchQuery: string = '';
  selectedAttraction: any = null;

  constructor(private travelService: TravelService, private baseService: BaseService) { }

    ngOnInit() {
        this.travelService.getTouristicAttraction().subscribe(data => {
        this.touristicAttractions = data;
        });
    }
    selectAttraction(attraction: any) {
        if (this.selectedAttraction === attraction) {
            this.selectedAttraction = null;
        } else {
            this.selectedAttraction = attraction;
        }
        this.baseService.changeAttraction(this.selectedAttraction);
    }
    search() {
        if (this.searchQuery) {
            this.touristicAttractions = this.touristicAttractions.filter((attraction: any) =>
                attraction.name.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        } else {
            this.ngOnInit();
        }
    }

}
