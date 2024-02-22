import { Component } from '@angular/core';
import { GTLeagueService } from 'src/app/services/api.service';

@Component({
  selector: 'pg-gtleague',
  templateUrl: './pg-gtleague.component.html',
  styleUrls: ['./pg-gtleague.component.scss']
})
export class PgGtleagueComponent {

  constructor(public resultsData: GTLeagueService) {}

}
