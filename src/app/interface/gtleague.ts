export interface GtLeagueResponse extends Array<GtLeagueResponse> {
  updatedAt: string,
  result: {
      stats: {
      away_score: number,
      home_score: number
      }
  },
  participants: GtLeagueParticipants,
  season: GtLeagueSeason
}
  
interface GtLeagueSeason extends Array<GtLeagueSeason> {
  tournament: {
    category: {
      sport: {
        name: string
      }
    }
  }
};
  
interface GtLeagueParticipants extends Array<GtLeagueParticipants> {
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