import 'package:flutter_swapi_characters/core/models/starwars_list_response.dart';

abstract class StarwarsInterface {
  Future<List<StarWarsCharacter>> getAllPeople();
  Future<StarWarsCharacter> getOnePeople();
}