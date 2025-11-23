import { Routes } from '@angular/router';
import { TopMovieList } from './pages/top-movie-list/top-movie-list';
import { PeopleDetail } from './pages/people-detail/people-detail';
import { SearchPage } from './pages/search-page/search-page';
import { PeopleList } from './pages/people-list/people-list';
import { MovieDetail } from './pages/movie-detail/movie-detail';

export const routes: Routes = [
    {path: '', component: TopMovieList, pathMatch: 'full'},
    { path: '', redirectTo: 'movies', pathMatch: 'full' },

  { path: 'movies', component: TopMovieList },
  { path: 'movies/:id', component: MovieDetail },

  { path: 'people', component: PeopleList },
  { path: 'people/:id', component: PeopleDetail},

  { path: 'search', component: SearchPage },
];