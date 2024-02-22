export interface GtLeagueResponse extends Array<GtLeagueResponse> {
  updatedAt: string,
  result: {
      stats: {
      away_score: number,
      home_score: number
      }
  },
  participants: GtLeagueParticipants  
}
  
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