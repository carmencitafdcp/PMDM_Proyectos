abstract class StarwarsInterface {
  Future<List<StarWarsResult>> getAllPeople();
  Future<StarwarsResult> getOnePeople();
}