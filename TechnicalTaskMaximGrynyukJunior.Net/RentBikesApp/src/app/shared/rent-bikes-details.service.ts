import { Injectable } from '@angular/core';
import { Bike } from './rent-bikes-detail.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import {  throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentBikesDetailsService {

  constructor(private http: HttpClient) { } 

  private readonly baseUrl = "http://localhost:49948/api/v2/RentBike";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  formData:Bike = new Bike();

  createAvailableBike(id: number, bike: Bike) {
    bike.id = ++id;
    bike.isAvailable = true;
    bike.rentCost = +bike.rentCost;
    console.log(`${this.baseUrl+ "/" + bike.id }`);
    console.log(bike);
    return this.http.post(`${this.baseUrl+ "/" + bike.id }`, JSON.stringify(bike), this.httpOptions)
    .pipe(
      catchError(this.errorHandler));
  }

  setRent(id: number) {
    let result = this.http.put(`${this.baseUrl + "/" + id +"/RentBike"}`, this.httpOptions);
    return this.http.put(`${this.baseUrl + "/" + id +"/RentBike"}`, this.httpOptions);
  }

  cancelRent(id: number) {
    return this.http.put(`${this.baseUrl + "/" + id + "/CancelRent"}`, this.httpOptions);
  }

  deleteBike(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`, this.httpOptions);
  }

  getBikes() {
    return this.http.get(`${this.baseUrl}/Bikes`, this.httpOptions);
  }

  getAvailableBikes() { 
    return this.http.get(this.baseUrl + "/AvailableBikes");
  }

  getRentBikes() {
    return this.http.get(this.baseUrl + "/RentBikes");
  }
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}