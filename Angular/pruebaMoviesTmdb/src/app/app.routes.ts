import { Query } from '@angular/core';
import { Routes } from '@angular/router';
import { HomePage } from './page/home-page/home-page';
import { MovieDetail } from './page/movie-detail/movie-detail';

export const routes: Routes = [
    {path: '', component: HomePage, pathMatch: 'full'},
    {path: '', component: MovieDetail, pathMatch: 'full'},
];
