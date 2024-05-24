import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  currentDate   = '' as string;
  tomorrowDate  = '' as string;
  limit: number = 1000;
  baseURL: string = "https://api.gtleagues.com/api/";

  constructor(private http: HttpClient) {
    this.setCurrentDate();
  }

  setCurrentDate() {
    const today    = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    this.currentDate  = this.formatDate(today);
    this.tomorrowDate = this.formatDate(tomorrow);
  }

  formatDate(date: Date): string {
    const year  = date.getFullYear();
    const month = this.padZero(date.getMonth() + 1);
    const day   = this.padZero(date.getDate());
    return `${year}-${month}-${day}`;
  }

  padZero(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

  fetchSeasonsData(): Observable<any> {
    return this.http.get(`${this.baseURL}seasons?limit=${this.limit}&offset=0&status=1`);
  }


  fetchResultsData(): Observable<any> {
    const kickoff = `between:${this.currentDate}T03:00:00.000Z,${this.tomorrowDate}T02:59:59.999Z`;
    const params  = {
      kickoff,
      limit: 100,
      offset: 0,
      sort: '-kickoff,-matchNr',
      status: 'in:3,5,4,6',
      xtc: true
    };

    return this.http.get(`${this.baseURL}fixtures`, { params });
  }


  fetchDetailsData(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}fixtures/${id}`);
  }
}
