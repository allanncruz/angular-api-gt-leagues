export interface ResultsResponse extends Array<ResultsResponse> {
  updatedAt: string,
  kickoff: string,
  result: {
      stats: {
      away_score: number,
      home_score: number
    }
  },
  participants: Participants,
  season: Pournament,
  week: number,
  matchNr: number,
  id: number
}
  
interface Pournament extends Array<Pournament> {
  tournament: {
    name: string,
    category: {
      name: string
      sport: {
        name: string
      }
    }
  }
  name: string
};
  
interface Participants extends Array<Participants> {
  participant: {
    team :{
      crest: string,
      name: string
    },
    player :{
      nickname: string,
      name: string
    }
  }
};