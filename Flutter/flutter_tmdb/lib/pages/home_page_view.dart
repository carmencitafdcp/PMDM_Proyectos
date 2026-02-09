import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import 'package:flutter_tmdb/features/movie_list/bloc/movie_list_bloc.dart';
import 'package:flutter_tmdb/features/movie_list/bloc/movie_list_event.dart';
import 'package:flutter_tmdb/features/movie_list/bloc/movie_list_state.dart';
import 'package:flutter_tmdb/core/services/movie_service.dart';
import 'package:flutter_tmdb/features/ui/movie_card_widget.dart';

class HomePageView extends StatefulWidget {
  const HomePageView({super.key});

  @override
  State<HomePageView> createState() => _HomePageViewState();
}

class _HomePageViewState extends State<HomePageView> {
  late MovieListBloc homeMovieBloc;

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return BlocProvider<MovieListBloc>(
      create: (_) =>
          homeMovieBloc = MovieListBloc(MovieService())
            ..add(LoadPopularMovies()),
      child: Scaffold(
        appBar: AppBar(title: const Text('Películas')),
        body: Padding(
          padding: const EdgeInsets.all(12),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              BlocBuilder<MovieListBloc, MovieListState>(
                builder: (context, state) {
                  final isPopular = state.selectedType == MovieListType.popular;
                  final selectedColor = const Color.fromARGB(255, 150, 1, 113);

                  return Row(
                    children: [
                      isPopular
                          ? ElevatedButton(
                              onPressed: () {
                                context.read<MovieListBloc>().add(
                                  LoadPopularMovies(),
                                );
                              },
                              style: ElevatedButton.styleFrom(
                                backgroundColor: selectedColor,
                                foregroundColor: Colors.white,
                                padding: const EdgeInsets.symmetric(
                                  horizontal: 12,
                                  vertical: 8,
                                ),
                                elevation: 2,
                              ),
                              child: const Text('Populares'),
                            )
                          : TextButton(
                              onPressed: () {
                                context.read<MovieListBloc>().add(
                                  LoadPopularMovies(),
                                );
                              },
                              style: TextButton.styleFrom(
                                foregroundColor: selectedColor,
                                padding: const EdgeInsets.symmetric(
                                  horizontal: 12,
                                  vertical: 8,
                                ),
                              ),
                              child: const Text('Populares'),
                            ),

                      const SizedBox(width: 8),

                      !isPopular
                          ? ElevatedButton(
                              onPressed: () {
                                context.read<MovieListBloc>().add(
                                  LoadTopRatedMovies(),
                                );
                              },
                              style: ElevatedButton.styleFrom(
                                backgroundColor: selectedColor,
                                foregroundColor: Colors.white,
                                padding: const EdgeInsets.symmetric(
                                  horizontal: 12,
                                  vertical: 8,
                                ),
                                elevation: 2,
                              ),
                              child: const Text('Mejor Valoradas'),
                            )
                          : TextButton(
                              onPressed: () {
                                context.read<MovieListBloc>().add(
                                  LoadTopRatedMovies(),
                                );
                              },
                              style: TextButton.styleFrom(
                                foregroundColor: selectedColor,
                                padding: const EdgeInsets.symmetric(
                                  horizontal: 12,
                                  vertical: 8,
                                ),
                              ),
                              child: const Text('Mejor Valoradas'),
                            ),
                    ],
                  );
                },
              ),

              const SizedBox(height: 12),

              SizedBox(
                height: 210,
                child: BlocBuilder<MovieListBloc, MovieListState>(
                  builder: (context, state) {
                    if (state is MovieListLoading) {
                      return const Center(child: CircularProgressIndicator());
                    }
                    if (state is MovieListError) {
                      return Center(child: Text(state.message));
                    }
                    if (state is MovieListLoaded) {
                      final movies = state.movies;
                      if (movies.isEmpty)
                        return const Center(child: Text('Sin películas'));
                      return ListView.builder(
                        scrollDirection: Axis.horizontal,
                        itemCount: movies.length,
                        itemBuilder: (context, index) {
                          final m = movies[index];
                          return Padding(
                            padding: const EdgeInsets.only(right: 10),
                            child: MovieCardWidget(movie: m),
                          );
                        },
                      );
                    }
                    return const SizedBox();
                  },
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
