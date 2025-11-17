import { Component, OnInit } from '@angular/core';
import { VehicleServiceTs } from '../../services/vehicles-service';
import { Vehicle } from '../../interface/vehicle-list-response';

@Component({
  selector: 'app-vehicles-list-page',
  imports: [],
  templateUrl: './vehicles-list-page.html',
  styleUrls: ['./vehicles-list-page.css'],
})
export class VehiclesListPage implements OnInit{
  constructor(private vehicleService: VehicleServiceTs){}
  vehicleList : Vehicle[] = []
  ngOnInit(): void {
      this.vehicleService.getVehicleList().subscribe((resp) => {
      this.vehicleList = resp.results;
    });
  }
}
