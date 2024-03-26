import { Component, OnInit } from '@angular/core';
import { SeasonsResponse } from 'src/app/interface/seasons';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'pg-seasons',
  templateUrl: './pg-seasons.component.html',
  styleUrls: ['./pg-seasons.component.scss']
})
export class PgSeasonsComponent implements OnInit{
  data = {} as SeasonsResponse;
  loading: boolean = true;

  constructor(public seasonsData: ApiService) {}
  
  ngOnInit(): void {
    this.seasonsData.fetchSeasonsData().subscribe(
      (response) => {
        this.data = response;
        this.loading = false;
      },
      (error) => {
        console.error('Erro ao carregar dados:', error);
        this.loading = false;
      }
    );
  }
}
