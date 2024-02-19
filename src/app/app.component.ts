import { Component } from '@angular/core';
import { AuthService } from './root/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  email = '' as string;
  password = '' as string;

  constructor(public auth: AuthService) {

  }
}
