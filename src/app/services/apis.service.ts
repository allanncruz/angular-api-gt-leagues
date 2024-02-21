import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface GtLeagueResponse extends Array<GtLeagueResponse> {
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


@Injectable({
  providedIn: 'root'
})
export class GTLeagueService {
  listResults = {} as GtLeagueResponse;

  constructor(private http: HttpClient) {
    this.update();
  }

  update() {
    let gtLeagueUrl = 'https://api.gtleagues.com/api/fixtures?kickoff=between%3A2024-02-21T03%3A00%3A00.000Z%2C2024-02-22T02%3A59%3A59.999Z&limit=50&offset=0&sort=-kickoff%2C-matchNr&status=in%3A3%2C5%2C4%2C6&xtc=true';
    this.http.get<GtLeagueResponse>(gtLeagueUrl).subscribe(data => {
      this.listResults = data;
    })
  }
}
