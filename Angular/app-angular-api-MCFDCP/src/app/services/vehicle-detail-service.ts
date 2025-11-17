import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VehicleDetail } from '../interface/vehicle-detail-response';

@Injectable({
  providedIn: 'root',
})
export class VehicleDetailService {
  constructor(private http: HttpClient) {}

  getVehicleDetail(id: string): Observable<VehicleDetail> {
    return this.http.get<VehicleDetail>('https://swapi.dev/api/vehicles/' + id + '/');
  }
}
