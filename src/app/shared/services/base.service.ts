import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  protected apiUrl = 'http://localhost:3001';

  private destinationSource = new BehaviorSubject({name: '', image_url: ''});
  currentDestination = this.destinationSource.asObservable();

  private flyCompanySource = new BehaviorSubject({name: '', image_url: '', price: 0});
  currentFlyCompany = this.flyCompanySource.asObservable();

  private hotelSource = new BehaviorSubject({name: '', image_url: '', price: 0});
  currentHotel = this.hotelSource.asObservable();

  private attractionSource = new BehaviorSubject({name: '', description: '', image_url: '', price: 0});
  currentAttraction = this.attractionSource.asObservable();

  constructor(protected http: HttpClient) { }

  register(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/users`, user);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users?email=${email}&password=${password}`);
  }

  forgotPassword(email: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users?email=${email}`);
  }

  changeDestination(destination: {name: string, image_url: string}) {
    this.destinationSource.next(destination);
  }

  changeFlyCompany(flyCompany: {name: string, image_url: string, price: number}) {
    this.flyCompanySource.next(flyCompany);
  }
  changeHotel(hotel: {name: string, image_url: string, price: number}) {
    this.hotelSource.next(hotel);
  }
  changeAttraction(attraction: {name: string, description: string, image_url: string, price: number}) {
    this.attractionSource.next(attraction);
  }
}