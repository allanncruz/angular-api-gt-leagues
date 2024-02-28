import { Component } from '@angular/core';
import { ResultsService } from 'src/app/services/result.service';

@Component({
  selector: 'pg-results',
  templateUrl: './pg-results.component.html',
  styleUrls: ['./pg-results.component.scss']
})
export class PgResultsComponent {

  constructor(public resultsData: ResultsService) {}

}
