import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { GenresService } from '../../services/genres-service';
import { DiscoverService } from '../../services/discover-service';
import { AuthenticationService } from '../../services/authentication-service';
import { Genre } from '../../models/interfaces/genre.interface';
import { MovieDiscover } from '../../models/interfaces/discover-movie-response.interface';

@Component({
  selector: 'app-movie-discover-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './movie-discover-page.html',
  styleUrls: ['./movie-discover-page.css'],
})
export class MovieDiscoverPage implements OnInit {
  genresMovieList: Genre[] = [];
  genreMovieSearch = new FormControl('', Validators.required);
  movieList: MovieDiscover[] = [];

  constructor(
    private genresService: GenresService,
    private discoverService: DiscoverService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.genresService.getMovieList().subscribe((resp) => {
      this.genresMovieList = resp.genres;
    });
  }

  searchMovies() {
    const genre = this.genreMovieSearch.value;

    if (!genre) {
      this.movieList = [];
      return;
    }

    this.discoverService.getMovieList(genre).subscribe((resp) => {
      this.movieList = resp.results;
    });
  }

  getSubStr(text: string) {
    return text.length > 50 ? text.substring(0, 49) + '...' : text;
  }

  getImageUrl(posterPath: string) {
    return `https://image.tmdb.org/t/p/w500${posterPath}`;
  }

  login() {
    this.authenticationService.createRequestToken().subscribe((resp) => {
      const token = resp.request_token;
      window.open(
        `https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:4200/create-session`,
        '_blank'
      );
    });
  }
}