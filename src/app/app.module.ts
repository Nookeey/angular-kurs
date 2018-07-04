import { SharedModule } from './shared/shared.module';
import { AboutModule } from './about/about.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { AppRoutingModule } from './app.routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DataBaseService } from './data-base.service';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';

import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './auth/auth.service';
import { SecretComponent } from './secret/secret.component';
import { AuthGuardsService } from './auth/auth-guards.service';
import { Level1Component } from './secret/level1/level1.component';
import { Level2Component } from './secret/level2/level2.component';

const config = {
  apiKey: 'AIzaSyD3F1aHxVyvHdRqPYUSH8k-AT_oNNMwOCw',
  authDomain: 'ng-kurs1.firebaseapp.com',
  databaseURL: 'https://ng-kurs1.firebaseio.com',
  projectId: 'ng-kurs1',
  storageBucket: '',
  messagingSenderId: '611882025941'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    PageNotFoundComponent,
    CourseDetailComponent,
    CoursesListComponent,
    LoginComponent,
    SecretComponent,
    Level1Component,
    Level2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    SharedModule
  ],
  providers: [DataBaseService, AuthService, AuthGuardsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
