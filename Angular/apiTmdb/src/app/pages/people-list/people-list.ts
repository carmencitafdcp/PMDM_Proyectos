import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieListService } from '../../services/movie-list-service';

@Component({
  selector: 'app-people-list',
  imports: [],
  templateUrl: './people-list.html',
  styleUrl: './people-list.css',
})
export class PeopleList implements OnInit {

  people: any[] = [];

  constructor(private service: MovieListService, private router: Router) {}

  ngOnInit() {
    this.service.getPopularPeople().subscribe(r => this.people = r.results);
  }

  goToDetail(id: number) {
    this.router.navigate(['/people', id]);
  }
}