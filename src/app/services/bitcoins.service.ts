import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Response extends Array<Response> {
  updatedAt: string,
  result: {
    stats: {
      away_score: number,
      home_score: number
    }
  },
  participants: Participants  
}

interface Participants extends Array<Participants> {
  participant: {
    team :{
      crest: string,
      name: string
    }
    player :{
      nickname: string
    }
  }
};


@Injectable({
  providedIn: 'root'
})
export class BitcoinsService {
  listResults = {} as Response;

  constructor(private http: HttpClient) {
    this.update();
  }

  update() {
    let url = 'https://hr.gtleagues.com/api/fixtures?kickoff=between%3A2023-11-04T03%3A00%3A00.000Z%2C2023-11-05T02%3A59%3A59.999Z&limit=50&offset=0&sort=-kickoff%2C-matchNr&status=in%3A3%2C5%2C4%2C6&xtc=true';
    this.http.get<Response>(url).subscribe(data => {

      this.listResults = data;

      console.log(data)
    })
  }
}
