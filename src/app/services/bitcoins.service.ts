import { Injectable } from '@angular/core';
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
    BRL: {
      symbol: string,
      rate_float: number
    };
  };
}

@Injectable({
  providedIn: 'root'
})
export class BitcoinsService {
  currentPrice = {} as ResponseCoins;

  constructor(private http: HttpClient) {
    this.update();
  }

  update() {
    let url = 'https://api.coindesk.com/v1/bpi/currentprice/BRL.json';
    this.http.get<ResponseCoins>(url).subscribe(data => {
      this.currentPrice = data;
    })
  }
}
