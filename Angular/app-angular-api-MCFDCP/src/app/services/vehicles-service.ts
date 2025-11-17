import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VehiclesResponse } from '../interface/vehicle-list-response';

@Injectable({
  providedIn: 'root',
})
export class VehicleServiceTs {
  constructor(private http:HttpClient){}
  
  getVehicleList():Observable<VehiclesResponse>{
    return this.http.get<VehiclesResponse>('https://swapi.dev/api/vehicles/');
  }
}


