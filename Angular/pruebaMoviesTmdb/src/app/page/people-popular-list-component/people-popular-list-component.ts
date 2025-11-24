import { Component, OnInit } from '@angular/core';
import { People, peoplePopularListResponse } from '../../models/people-popular-list-response.interface';
import { PeoplePopularListService } from '../../service/people-popular-lists-service';

@Component({
  selector: 'app-people-popular-list-component',
  imports: [],
  templateUrl: './people-popular-list-component.html',
  styleUrl: './people-popular-list-component.css',
})
export class PeoplePopularListComponent implements OnInit{
  // peoplePopularList: People[] = [];
  // constructor(private peopleService: PopularListService){}

  ngOnInit(): void {
    //   this.peopleService.getPopularPeople().subscribe(resp  => {
    //   this.peoplePopularList = resp.people;
    // });
  }

  
}
