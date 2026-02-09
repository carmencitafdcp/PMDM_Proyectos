import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_tmdb/features/movie_list/bloc/movie_list_event.dart';
import 'package:flutter_tmdb/features/movie_list/bloc/movie_list_state.dart';
import 'package:flutter_tmdb/core/services/movie_service.dart';

class MovieListBloc extends Bloc<MovieListEvent, MovieListState> {
  final MovieService movieService;

  MovieListBloc(this.movieService) : super(MovieListInitial()) {
    on<LoadPopularMovies>((event, emit) async {
      emit(MovieListLoading(selectedType: MovieListType.popular));
      try {
        final movies = await movieService.getList(MovieListType.popular);
        emit(MovieListLoaded(movies: movies, selectedType: MovieListType.popular));
      } catch (e) {
        emit(MovieListError(
            message: "Error al cargar las películas populares",
            selectedType: MovieListType.popular));
      }
    });

    on<LoadTopRatedMovies>((event, emit) async {
      emit(MovieListLoading(selectedType: MovieListType.topRated));
      try {
        final movies = await movieService.getList(MovieListType.topRated);
        emit(MovieListLoaded(movies: movies, selectedType: MovieListType.topRated));
      } catch (e) {
        emit(MovieListError(
            message: "Error al cargar las películas mejor valoradas",
            selectedType: MovieListType.topRated));
      }
    });
  }
}