import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  fetchSeasonsData(): Observable<any> {
    return this.http.get('https://api.gtleagues.com/api/seasons?limit=1000&offset=0&status=1');
  }

  fetchResultsData(): Observable<any> {
    return this.http.get('https://api.gtleagues.com/api/fixtures?kickoff=between%3A2024-02-21T03%3A00%3A00.000Z%2C2024-02-22T02%3A59%3A59.999Z&limit=50&offset=0&sort=-kickoff%2C-matchNr&status=in%3A3%2C5%2C4%2C6&xtc=true');
  }
}
