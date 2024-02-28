import { Component } from '@angular/core';
import { SeasonsService } from 'src/app/services/seasons.service';

@Component({
  selector: 'pg-seasons',
  templateUrl: './pg-seasons.component.html',
  styleUrls: ['./pg-seasons.component.scss']
})
export class PgSeasonsComponent {

  constructor(public seasonsData: SeasonsService) {}

}
