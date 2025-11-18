import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiMovieListPage } from './api-movie-list-page';

describe('ApiMovieListPage', () => {
  let component: ApiMovieListPage;
  let fixture: ComponentFixture<ApiMovieListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiMovieListPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiMovieListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
