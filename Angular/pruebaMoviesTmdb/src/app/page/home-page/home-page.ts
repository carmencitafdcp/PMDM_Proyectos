import { Component, OnInit } from '@angular/core';
import { PeoplePopularListService } from '../../service/people-popular-lists-service';
import { MoviePopularListService } from '../../service/movie-popular-list-service';
import { Movie, moviePopularListResponse } from '../../models/movie-popular-list-response.interface';
import { People, peoplePopularListResponse } from '../../models/people-popular-list-response.interface';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements OnInit {
  peopleList: People[] = [];
  movieList: Movie[] = [];
  constructor(private peoplePopularListService: PeoplePopularListService, private moviePopularListService: MoviePopularListService) { }

  ngOnInit(): void {
    this.peoplePopularListService.getPopularPeople().subscribe(resp => {
      this.peopleList = resp.people;
    });
    this.moviePopularListService.getPopularMovie().subscribe(resp => {
      this.movieList = resp.results;
    });
  }
}
