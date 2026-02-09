import 'package:flutter_tmdb/core/models/movies_list_response.dart';
import 'package:flutter_tmdb/core/services/movie_service.dart';

abstract class MovieListState {
  final MovieListType selectedType;
  const MovieListState({required this.selectedType});
}

class MovieListInitial extends MovieListState {
  MovieListInitial() : super(selectedType: MovieListType.popular);
}

class MovieListLoading extends MovieListState {
  MovieListLoading({required super.selectedType});
}

class MovieListLoaded extends MovieListState {
  final List<Movie> movies;

  MovieListLoaded({
    required this.movies,
    required super.selectedType,
  });
}

class MovieListError extends MovieListState {
  final String message;

  MovieListError({
    required this.message,
    required super.selectedType,
  });
}