import { Routes } from '@angular/router';
import { TopMovieList } from './pages/top-movie-list/top-movie-list';

export const routes: Routes = [
    {path: '', component: TopMovieList, pathMatch: 'full'},
];