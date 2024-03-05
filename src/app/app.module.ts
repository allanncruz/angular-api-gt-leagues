import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AuthService } from './services/auth.service';
import { SignInComponent } from './components/cp-signin/cp-signin.component';
import { NavbarComponent } from './components/cp-navbar/cp-navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { PgResultsComponent } from './pages/pg-results/pg-results.component';
import { PgHomeComponent } from './pages/pg-home/pg-home.component';
import { PgSeasonsComponent } from './pages/pg-seasons/pg-seasons.component';
import { RouterModule } from '@angular/router';
import { NgxImageCompressService } from 'ngx-image-compress';
import { PgPhotoComponent } from './pages/pg-photo/pg-photo.component';
import { ApiService } from './services/api.service';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpResultsComponent } from './pages/sp-results/sp-results.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    NavbarComponent,
    PgResultsComponent,
    PgHomeComponent,
    PgSeasonsComponent,
    PgPhotoComponent,
    SpinnerComponent,
    SpResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: PgHomeComponent },
      {path: 'home', component: PgHomeComponent },
      {path: 'results', component: PgResultsComponent },
      {path: 'results/:id', component: SpResultsComponent },
      {path: 'current-seasons', component: PgSeasonsComponent },
      {path: 'imagem-compress', component: PgPhotoComponent }
    ]),
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyASnn7KUCLuPvrS_Jboyk0If-mRZABCMDM",
      authDomain: "angular-auth-df76e.firebaseapp.com",
      databaseURL: "https://angular-auth-df76e-default-rtdb.firebaseio.com",
      projectId: "angular-auth-df76e",
      storageBucket: "angular-auth-df76e.appspot.com",
      messagingSenderId: "644096836227",
      appId: "1:644096836227:web:47bad91a59fe97ec0251b6"
    }),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule
  ],
  providers: [
    AuthService, 
    ApiService,
    NgxImageCompressService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
