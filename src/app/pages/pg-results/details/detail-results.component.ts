import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResultsResponse } from 'src/app/interface/results';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detail-results',
  templateUrl: './detail-results.component.html',
  styleUrls: ['./detail-results.component.scss']
})
export class DetailsResultsComponent {
  data = {} as ResultsResponse;
  matchId = {} as number;
  loading: boolean = false;

  constructor(private route: ActivatedRoute, public resultsData: ApiService) { }

  getDetalhes(matchId: number): void {
    this.resultsData.fetchDetailsData(matchId).subscribe(
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

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.matchId = params['id'];
      this.getDetalhes(this.matchId);
    });
  }
}
