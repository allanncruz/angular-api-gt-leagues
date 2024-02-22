import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GtLeagueResponse } from '../interface/gtleague';

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
