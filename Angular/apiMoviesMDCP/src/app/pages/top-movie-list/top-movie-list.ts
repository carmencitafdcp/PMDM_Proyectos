import { Component, OnInit } from '@angular/core';
import { Movie } from '../../Interfaces/movie-list-item.interface';
import { MovieListService } from '../../Services/movie-list-service';

@Component({
  selector: 'app-top-movie-list',
  imports: [],
  templateUrl: './top-movie-list.html',
  styleUrl: './top-movie-list.css',
})
export class TopMovieList implements OnInit{
  movielist: Movie[] = [];

  constructor(private movieListService: MovieListService) {}

  ngOnInit(): void {
    this.loadTopRatedMovies();
  }

  loadTopRatedMovies() {
    this.movieListService.getTopRatedMovies().subscribe(resp => {
      this.movielist = resp.results;
    });
  }

  loadPopularMovies() {
    this.movieListService.getPopularMovies().subscribe(resp => {
      this.movielist = resp.results;
    }); 
  }

}
