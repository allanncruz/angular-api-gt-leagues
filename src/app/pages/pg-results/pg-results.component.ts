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
  selectedOverNumber: number = 1.5;
  numbers: number[] = [1.5, 2.5, 3.5, 4.5, 5.5, 6.5, 7.5, 8.5, 9.5, 10.5, ];

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
