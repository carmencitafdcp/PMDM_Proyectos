import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieListService } from '../../services/movie-list-service';

@Component({
  selector: 'app-people-detail',
  imports: [],
  templateUrl: './people-detail.html',
  styleUrl: './people-detail.css',
})
export class PeopleDetail implements OnInit {

  people: any[] = [];

  constructor(private service: MovieListService, private router: Router) {}

  ngOnInit() {
    this.service.getPopularPeople().subscribe(r => this.people = r.results);
  }

  goToDetail(id: number) {
    this.router.navigate(['/people', id]);
  }
}
