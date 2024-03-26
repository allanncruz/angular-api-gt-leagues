export interface SeasonsResponse extends Array<SeasonsResponse> {
  name: string,
  tournament: {
    name: string,
    category: {
      name: string,
      sport: {
        name: string,
      }
    }
  }
}