import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-page',
  imports: [],
  templateUrl: './search-page.html',
  styleUrl: './search-page.css',
})
export class SearchPage {
  results: any[] = [];

  constructor(private http: HttpClient) {}

  search(query: string) {
    this.http.get<any>(`https://api.themoviedb.org/3/search/multi?query=${query}`)
      .subscribe(r => this.results = r.results);
  }
}