import { Component, OnInit } from '@angular/core';
import { ResultsResponse } from 'src/app/interface/results';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'pg-results',
  templateUrl: './pg-results.component.html',
  styleUrls: ['./pg-results.component.scss']
})
export class PgResultsComponent implements OnInit {
  data = {} as ResultsResponse;
  loading: boolean = true;

  constructor(public resultsData: ApiService) {}
  
  ngOnInit(): void {
    this.resultsData.fetchResultsData().subscribe(
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
