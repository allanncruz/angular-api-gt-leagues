import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  today: Date = new Date();
  apiGtLeague: string = "https://api.gtleagues.com/api/";
  limit: number = 1000;

  constructor(private http: HttpClient) {}

  fetchSeasonsData(): Observable<any> {
    return this.http.get(`${this.apiGtLeague}seasons?limit=${this.limit}&offset=0&status=1`);
  }

  fetchResultsData(): Observable<any> {
    const year  = this.today.getFullYear();
    const month = this.today.getMonth() + 1;
    const day   = this.today.getDate(); 
    const dayTo = this.today.getDate() + 1; 

    let monthValue = '';
    let dayValue   = '';
    let dayValueTo = '';

    monthValue = ((month < 10) ? '0' : '').concat(month.toString())
    dayValue   = ((day < 10) ? '0' : '').concat(day.toString())
    dayValueTo = ((dayTo < 10) ? '0' : '').concat(dayTo.toString())

    const kickoffFrom = year.toString().concat('-').concat(monthValue).concat('-').concat(dayValue);
    const kickoffTo   = year.toString().concat('-').concat(monthValue).concat('-').concat(dayValueTo);
    
    return this.http.get(`${this.apiGtLeague}fixtures?kickoff=between%3A${kickoffFrom}T03%3A00%3A00.000Z%2C${kickoffTo}T02%3A59%3A59.999Z&limit=50&offset=0&sort=-kickoff%2C-matchNr&status=in%3A3%2C5%2C4%2C6&xtc=true`);
  }
}
