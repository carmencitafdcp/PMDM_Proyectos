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

  factory StarWarsListResponse.fromJson(String str) =>
      StarWarsListResponse.fromMap(json.decode(str));

  factory StarWarsListResponse.fromMap(Map<String, dynamic> json) =>
      StarWarsListResponse(
        count: json["count"] ?? 0,
        next: json["next"],
        previous: json["previous"],
        results: List<StarWarsCharacter>.from(
          json["results"].map((x) => StarWarsCharacter.fromMap(x)),
        ),
      );

  Map<String, dynamic> toMap() => {
    "count": count,
    "next": next,
    "previous": previous,
    "results": List<dynamic>.from(results.map((x) => x.toMap())),
  };
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

  factory StarWarsCharacter.fromJson(String str) =>
      StarWarsCharacter.fromMap(json.decode(str));

  String toJson() => json.encode(toMap());

  factory StarWarsCharacter.fromMap(Map<String, dynamic> json) =>
      StarWarsCharacter(
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

  Map<String, dynamic> toMap() => {
    "name": name,
    "height": height,
    "mass": mass,
    "hair_color": hairColor,
    "skin_color": skinColor,
    "eye_color": eyeColor,
    "birth_year": birthYear,
    "gender": gender,
    "homeworld": homeworld,
    "films": films,
    "species": species,
    "vehicles": vehicles,
    "starships": starships,
    "created": created,
    "edited": edited,
    "url": url,
  };
}
