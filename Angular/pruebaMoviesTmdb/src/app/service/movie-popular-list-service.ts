import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_BASE_URL = 'https://api.themoviedb.org/3';

@Injectable({
  providedIn: 'root',
})

export class MoviePopularListService {
  constructor(private httpClient: HttpClient) { }

  getPopularMovie(){
    return this.httpClient.get(`${API_BASE_URL}/movie/popular`)
  }
}
