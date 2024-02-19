import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;
  error: any;

  constructor(public auth: AngularFireAuth) {}

  async emailSignin(email: string, password: string) {
    try {
      const credential = await this.auth.
      signInWithEmailAndPassword(
        email, 
        password
      );
      this.user = credential.user;

    } catch (error) {
      this.error = error;
    }  
  }

  async signOut() {
    await this.auth.signOut();
    this.user = null;
  }
}
