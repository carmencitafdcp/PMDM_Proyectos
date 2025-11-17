import { Routes } from '@angular/router';
import { VehiclesListPage } from './pages/vehicles-list-page/vehicles-list-page';
import { VehicleDetailPage } from './pages/vehicle-detail-page/vehicle-detail-page';

export const routes: Routes = [
    {path: 'vehicles', component: VehiclesListPage}, 
    {path:'vehicleDetail/:id', component: VehicleDetailPage}
];
