import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;
  error: any;
  userLogged: any;
  userLoggedParse: any;

  constructor(public auth: AngularFireAuth) {
    this.userLogged = localStorage.getItem('@authUser');
    this.userLoggedParse = JSON.parse(this.userLogged);
    console.log(this.userLoggedParse)
  }
  

  async emailSignin(email: string, password: string) {
    try {
      const credential = await this.auth.
      signInWithEmailAndPassword(
        email, 
        password
      );
      this.user = credential.user;
      localStorage.setItem('@authUser', JSON.stringify(this.user))
      location.reload();

    } catch (error) {
      this.error = error;
    }  
  }

  async signOut() {
    await this.auth.signOut();
    this.user = null;
    
    localStorage.removeItem('@authUser')
    location.reload();
  }
}
