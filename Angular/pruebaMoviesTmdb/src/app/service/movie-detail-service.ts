import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieDetailResponse } from '../models/movie-detail-response.interface';
import { VideoResponse } from '../models/video-movie-detail-response.interface';

const API_BASE_URL = 'https://api.themoviedb.org/3';

@Injectable({
  providedIn: 'root',
})

export class MovieDetailService {
  constructor(private httpClient: HttpClient) { }

  getMovieDetail(id: number){
    return this.httpClient.get<MovieDetailResponse>(`${API_BASE_URL}/movie/${id}`)
  }

  getMovieVideos(id: number){
    return this.httpClient.get<VideoResponse>(`${API_BASE_URL}/movie/${id}/videos`)
  }
}
