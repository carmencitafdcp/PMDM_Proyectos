import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page';

export const routes: Routes = [
    { path: '', component: HomePageComponent, pathMatch: 'full' },

    { path: 'home', component: HomePageComponent },

    { path: '**', redirectTo: '' },
];
