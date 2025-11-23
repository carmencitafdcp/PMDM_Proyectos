import { Component, OnInit } from '@angular/core';
import { MovieListService } from '../../services/movie-list-service';
import { Movie } from '../../models/movie-list-item';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-top-movie-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './top-movie-list.html',
  styleUrl: './top-movie-list.css',
})
export class TopMovieList implements OnInit {

  movieList: Movie[] = [];
  selectedCategory: string = 'popular'; // default

  constructor(private movieListService: MovieListService) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies() {
    if (this.selectedCategory === 'top_rated') {
      this.movieListService.getTopRated().subscribe(resp => {
        this.movieList = resp.results;
      });
    } 
    else if (this.selectedCategory === 'popular') {
      this.movieListService.getPopular().subscribe(resp => {
        this.movieList = resp.results;
      });
    }
    else if (this.selectedCategory === 'upcoming') {
      this.movieListService.getUpcoming().subscribe(resp => {
        this.movieList = resp.results;
      });
    }
  }

  onCategoryChange() {
    this.loadMovies();
  }
}
  