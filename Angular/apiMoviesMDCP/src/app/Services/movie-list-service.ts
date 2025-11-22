import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieListsTopRatedResponse } from '../Interfaces/movie-list-top-rated.interface';
import { MovieListsPopularResponse } from '../Interfaces/movie-list-popular.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {
  constructor(private http: HttpClient) { }

  getTopRatedMovies() {
    return this.http.get<MovieListsTopRatedResponse>('https://api.themoviedb.org/3/movie/top_rated');
  }

  getPopularMovies() {
    return this.http.get<MovieListsPopularResponse>('https://api.themoviedb.org/3/movie/popular');
  }
}
