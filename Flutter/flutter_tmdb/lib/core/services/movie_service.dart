import 'dart:convert';

import 'package:flutter_tmdb/config/api_config.dart';
import 'package:flutter_tmdb/core/interfaces/movies_list_interface.dart';
import 'package:flutter_tmdb/core/models/movies_list_response.dart';
import 'package:http/http.dart' as http;

enum MovieListType {
  popular("popular"),
  topRated("top_rated"),
  nowPlaying("now_playing"),
  upcoming("upcoming");

  final String value;
  const MovieListType(this.value);
}

class MovieService implements MoviesListInterface {
  @override
  Future<List<Movie>> getList(MovieListType listType) async {
    final url = '${ApiConfig.baseUrl}/movie/${listType.value}?api_key=${ApiConfig.apiKey}';
    final response = await http.get(Uri.parse(url));

    if (response.statusCode >= 200 && response.statusCode < 300) {
      final decoded = json.decode(response.body) as Map<String, dynamic>;
      final resp = MovieListResponse.fromJson(decoded);
      return resp.results;
    } else {
      return [];
    }
  }
}