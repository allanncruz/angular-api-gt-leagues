import { Component } from '@angular/core';
import { AuthService } from 'src/app/root/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  
  email = '' as string;
  password = '' as string;

  constructor(public auth: AuthService) {
  }

}
