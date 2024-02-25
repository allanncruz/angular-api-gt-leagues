import { Component } from '@angular/core';
import { GTLeagueService } from 'src/app/services/api.service';

@Component({
  selector: 'pg-results',
  templateUrl: './pg-results.component.html',
  styleUrls: ['./pg-results.component.scss']
})
export class PgResultsComponent {

  constructor(public resultsData: GTLeagueService) {}

}
