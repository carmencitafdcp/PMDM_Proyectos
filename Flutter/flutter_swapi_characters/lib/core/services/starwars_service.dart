import 'package:flutter_swapi_characters/core/interfaces/starwars_interface.dart';
import 'package:flutter_swapi_characters/core/models/starwars_list_response.dart';
import 'package:http/http.dart' as http;

class StarWarsService implements StarwarsInterface {
  final String _apiBaseUrl = "https://swapi.dev/api/people/";

  @override
  Future<List<StarWarsCharacter>> getAllPeople() async {
    var url = Uri.parse(_apiBaseUrl + '?limit=200&offset=0');
    try {
      var response = await http.get(url);

      if (response.statusCode == 200 || response.statusCode == 201) {
        var starwarsListResponse = StarWarsListResponse.fromJson(response.body);
        return starwarsListResponse.results;
      } else {
        return [];
      }
    } catch (e) {
      return [];
    }
  }

  @override
  Future<StarWarsCharacter> getOnePeople() async {
    // TODO: implement getOnePeople
    throw UnimplementedError();
  }
}