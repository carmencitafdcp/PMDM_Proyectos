import 'dart:convert';

class StarWarsListResponse {
  final int count;
  final String? next;
  final String? previous;
  final List<StarWarsCharacter> results;

  StarWarsListResponse({
    required this.count,
    this.next,
    this.previous,
    required this.results,
  });

  factory StarWarsListResponse.fromJson(Map<String, dynamic> json) {
    return StarWarsListResponse(
      count: json['count'] ?? 0,
      next: json['next'],
      previous: json['previous'],
      results: (json['results'] as List?)
          ?.map((item) => StarWarsCharacter.fromJson(item as Map<String, dynamic>))
          .toList() ?? [],
    );
  }
}


class StarWarsCharacter {
  final String name;
  final String height;
  final String mass;
  final String hairColor;
  final String skinColor;
  final String eyeColor;
  final String birthYear;
  final String gender;
  final String homeworld;
  final List<String> films;
  final List<String> species;
  final List<String> vehicles;
  final List<String> starships;
  final String created;
  final String edited;
  final String url;

  StarWarsCharacter({
    required this.name,
    required this.height,
    required this.mass,
    required this.hairColor,
    required this.skinColor,
    required this.eyeColor,
    required this.birthYear,
    required this.gender,
    required this.homeworld,
    required this.films,
    required this.species,
    required this.vehicles,
    required this.starships,
    required this.created,
    required this.edited,
    required this.url,
  });

  factory StarWarsCharacter.fromJson(Map<String, dynamic> json) {
    return StarWarsCharacter(
      name: json['name'] ?? '',
      height: json['height'] ?? '',
      mass: json['mass'] ?? '',
      hairColor: json['hair_color'] ?? '',
      skinColor: json['skin_color'] ?? '',
      eyeColor: json['eye_color'] ?? '',
      birthYear: json['birth_year'] ?? '',
      gender: json['gender'] ?? '',
      homeworld: json['homeworld'] ?? '',
      films: List<String>.from(json['films'] ?? []),
      species: List<String>.from(json['species'] ?? []),
      vehicles: List<String>.from(json['vehicles'] ?? []),
      starships: List<String>.from(json['starships'] ?? []),
      created: json['created'] ?? '',
      edited: json['edited'] ?? '',
      url: json['url'] ?? '',
    );
  }
}