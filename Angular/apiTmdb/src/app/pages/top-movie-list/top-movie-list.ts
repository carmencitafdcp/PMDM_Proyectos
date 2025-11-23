import { Component, OnInit } from '@angular/core';
import { MovieListService } from '../../services/movie-list-service';
import { Movie } from '../../models/movie-list-item';

@Component({
  selector: 'app-top-movie-list',
  imports: [],
  standalone: true,
  templateUrl: './top-movie-list.html',
  styleUrl: './top-movie-list.css',
})
export class TopMovieList implements OnInit {
  movieList: Movie[] = [];

  constructor(private movieListService: MovieListService) { }

  ngOnInit(): void {
    this.loadTopRatedMovies();
  }

  loadTopRatedMovies() {
    this.movieListService.getTopRated().subscribe(resp => {
      this.movieList = resp.results;
    });
  }

  loadPopularMovies() {
    this.movieListService.getPopular().subscribe(resp => {
      this.movieList = resp.results;
    });
  }

}