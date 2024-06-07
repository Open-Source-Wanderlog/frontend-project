import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private apiUrl = 'http://localhost:3000';  // URL to web api

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/users`, user);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users?email=${email}&password=${password}`);
  }

  forgotPassword(email: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users?email=${email}`);
  }
}
