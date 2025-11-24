import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_BASE_URL = 'https://api.themoviedb.org/3';

@Injectable({
  providedIn: 'root',
})

export class PeoplePopularListService {
  constructor(private httpClient: HttpClient) { }

  getPopularPeople() {
    return this.httpClient.get(`${API_BASE_URL}/person/popular`);
  }
}
