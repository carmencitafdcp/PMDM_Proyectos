import { Movie } from "./movie-list-item";

export interface MovieListsPopularResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}