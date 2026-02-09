import 'package:flutter/material.dart';
import 'package:flutter_tmdb/config/api_config.dart';
import 'package:flutter_tmdb/core/models/movies_list_response.dart';

class MovieCardWidget extends StatelessWidget {
  final Movie movie;
  const MovieCardWidget({super.key, required this.movie});

  @override
  Widget build(BuildContext context) {
    final poster = movie.posterPath != null
        ? '${ApiConfig.imageBaseUrl}${movie.posterPath}'
        : null;

    return SizedBox(
      width: 120,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          poster != null
              ? Image.network(poster, height: 160, width: 120, fit: BoxFit.cover)
              : Container(height: 160, width: 120, color: Colors.grey),
          const SizedBox(height: 6),
          Text(movie.title, maxLines: 2, overflow: TextOverflow.ellipsis),
        ],
      ),
    );
  }
}