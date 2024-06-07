// src/app/shared/services/travel.service.ts

import { Injectable } from '@angular/core';
import { BaseService} from "../../shared/services/base.service";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravelService extends BaseService {

  getTravelDestinations(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/travel_destinations`);
  }

  getFlyCompany(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/fly_company`);
  }

  getHotel(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/hotel`);
  }

  getTouristicAttraction(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/touristic_attraction`);
  }
}