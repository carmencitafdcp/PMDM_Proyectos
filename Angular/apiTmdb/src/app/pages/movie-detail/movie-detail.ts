import { Component, OnInit } from '@angular/core';
import { MovieListService } from '../../services/movie-list-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  imports: [],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.css',
})
export class MovieDetail implements OnInit {

  movie: any;

  constructor(
    private route: ActivatedRoute,
    private service: MovieListService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.service.getMovieDetail(id).subscribe(r=> this.movie = r);
  }
}
