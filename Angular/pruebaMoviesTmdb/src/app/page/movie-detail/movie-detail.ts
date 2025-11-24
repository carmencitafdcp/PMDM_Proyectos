import { Component, OnInit } from '@angular/core';
import { MovieDetailResponse } from '../../models/movie-detail-response.interface';
import { MovieDetailService } from '../../service/movie-detail-service';
import { Video } from '../../models/video-movie-detail-response.interface';

@Component({
  selector: 'app-movie-detail',
  imports: [],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.css',
})
export class MovieDetail implements OnInit {
  moviedetail?: MovieDetailResponse;
  movieVideo: Video[] = [];

  constructor(private movieDetailService: MovieDetailService) { }

  ngOnInit(): void {
    this.movieDetailService.getMovieDetail(550).subscribe(resp => {
      // this.moviedetail = resp.; ??????? no sé que poner aquí, en la interfaz no aparece ningún result o así.
    });

    this.movieDetailService.getMovieVideos(550).subscribe(resp => {
      this.movieVideo = resp.results;
    });
  }

  

}
