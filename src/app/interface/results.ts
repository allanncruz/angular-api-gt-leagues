export interface ResultsResponse extends Array<ResultsResponse> {
  updatedAt: string,
  result: {
      stats: {
      away_score: number,
      home_score: number
      }
  },
  participants: Participants,
  season: Pournament
}
  
interface Pournament extends Array<Pournament> {
  tournament: {
    category: {
      sport: {
        name: string
      }
    }
  }
};
  
interface Participants extends Array<Participants> {
  participant: {
    team :{
      crest: string,
      name: string
    },
    player :{
      nickname: string
    }
  }
};