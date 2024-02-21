import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'cp-signin',
  templateUrl: './cp-signin.component.html',
  styleUrls: ['./cp-signin.component.scss']
})
export class SignInComponent {
  
  email = '' as string;
  password = '' as string;

  constructor(public auth: AuthService) {
  }

}
