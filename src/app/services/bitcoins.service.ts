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
  history = [] as Array<ResponseCoins>;

  constructor(private http: HttpClient) {
    this.update();
  }

  update() {
    let url = 'https://api.coindesk.com/v1/bpi/currentprice/BRL.json';
    this.http.get<ResponseCoins>(url).subscribe(data => {
      if(this.currentPrice.bpi){
        let current = this.currentPrice.bpi.USD.rate_float;
        let readed = data.bpi.USD.rate_float 
        if (current && current != readed) {
          this.history.push(data);
        }
      } else {
        this.history.push(data);
      }
      this.currentPrice = data;
    })
  }
}
