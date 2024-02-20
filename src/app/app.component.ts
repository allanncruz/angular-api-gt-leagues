import { Component } from '@angular/core';
import { AuthService } from './root/auth.service';
import { HttpClient } from '@angular/common/http';

interface ResponseCoins {
  time: {
    updated: string
  },
  bpi: {
    USD: {
      symbol: string,
      rate_float: number
    };
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentPrice = {} as ResponseCoins;

  constructor(
    public auth: AuthService,
    private http: HttpClient) {}

  update() {
    let url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
    this.http.get<ResponseCoins>(url).subscribe(data => {
      this.currentPrice = data;
    })
  }

  ngOnInit() {
    this.update()
  }
}
