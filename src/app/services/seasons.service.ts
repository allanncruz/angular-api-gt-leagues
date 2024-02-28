import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SeasonsResponse } from '../interface/seasons';

@Injectable({
  providedIn: 'root'
})
export class SeasonsService {
  listSeasons = {} as SeasonsResponse;

  constructor(private http: HttpClient) {
    this.update();
  }

  update() {
    let gtLeagueUrl = 'https://api.gtleagues.com/api/seasons?limit=1000&offset=0&status=1';
    this.http.get<SeasonsResponse>(gtLeagueUrl).subscribe(data => {
      this.listSeasons = data;
    })
  }
}
