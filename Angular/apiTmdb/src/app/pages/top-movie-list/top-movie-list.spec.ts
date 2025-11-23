import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMovieList } from './top-movie-list';

describe('TopMovieList', () => {
  let component: TopMovieList;
  let fixture: ComponentFixture<TopMovieList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopMovieList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopMovieList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
