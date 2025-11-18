import { Component, input, OnInit } from '@angular/core';
import { VehicleDetailService } from '../../services/vehicle-detail-service';
import { VehicleDetail } from '../../interface/vehicle-detail-response';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-vehicle-detail-page',
  imports: [],
  templateUrl: './vehicle-detail-page.html',
  styleUrl: './vehicle-detail-page.css',
})
export class VehicleDetailPage{
  // constructor(private vehicleDetailService: VehicleDetailService){} 
  // vehicleDetail? = vehicleDetail;
  // ngOnInit(): void {
  //     this.vehicleDetailService.getVehicleDetail('id').subscribe((resp)) => {
  //     this.vehicleDetail = resp.results;
  //   }
  // }

  name = input('');
  model = input('');
  manufacturer = input('');
  costInCredits = input('');
  length = input('');
  maxAtmospheringSpeed = input('');
  crew = input('');
  passengers = input('');
  cargoCapacity = input('');
  consumables = input('');
  vehicleClass = input('');
  pilots = input<string[]> ([]);
  films = input<string[]> ([]);
  created = input('');
  edited = input('');
  url = input(''); 

  
}
