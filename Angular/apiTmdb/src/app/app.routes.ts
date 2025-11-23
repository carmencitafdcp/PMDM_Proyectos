import { Routes } from '@angular/router';
import { TopMovieList } from './pages/top-movie-list/top-movie-list';

export const routes: Routes = [
    {path: '', component: TopMovieList, pathMatch: 'full'},
    { path: '', redirectTo: 'movies', pathMatch: 'full' },

  { path: 'movies', component: TopMovieList },
  { path: 'movies/:id', component: MovieDetailPage },

  { path: 'people', component: PeopleListPage },
  { path: 'people/:id', component: PeopleDetailPage },

  { path: 'search', component: SearchPage },
];