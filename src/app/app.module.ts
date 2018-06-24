import { HttpService } from './services/http.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { DoneTaskComponent } from './done-task/done-task.component';
import { TasksService } from './services/tasks.service';
import { CheckedDirective } from './shared/checked.directive';
import { DateDirective } from './shared/date.directive';
import { TransformTaskPipe } from './shared/transform-task.pipe';
import { SortNamePipe } from './shared/sort-name.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
<<<<<<< HEAD
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DataBaseService } from './data-base.service';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { TemplateDriverComponent } from './about/template-driver/template-driver.component';
import { ReactiveFormComponent } from './about/reactive-form/reactive-form.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginComponent } from './auth/login/login.component';
import { AngularFireModule } from 'angularfire2';
import { AuthService } from './auth/auth.service';
import { SecretComponent } from './secret/secret.component';
import { AuthGuardsService } from './auth/auth-guards.service';
import { Level1Component } from './secret/level1/level1.component';
import { Level2Component } from './secret/level2/level2.component';

const config = {
  apiKey: 'AIzaSyCsBtD89H3LVFfkrE8evMjQZ4tMIsfmpSc',
  authDomain: 'angular-kurs-9e31d.firebaseapp.com',
  databaseURL: 'https://angular-kurs-9e31d.firebaseio.com',
  projectId: 'angular-kurs-9e31d',
  storageBucket: '',
  messagingSenderId: '340316071704'
};
=======
>>>>>>> 202cd527e8412772fc53ace87ae243e4edf12869

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HomeComponent,
    CoursesComponent,
    AboutComponent,
    PageNotFoundComponent,
    CourseDetailComponent,
    CoursesListComponent,
    TemplateDriverComponent,
    ReactiveFormComponent,
    LoginComponent,
    SecretComponent,
    Level1Component,
    Level2Component
=======
    AddTaskComponent,
    TodoTaskComponent,
    DoneTaskComponent,
    CheckedDirective,
    DateDirective,
    TransformTaskPipe,
    SortNamePipe,
>>>>>>> 202cd527e8412772fc53ace87ae243e4edf12869
  ],
  imports: [
    BrowserModule,
    FormsModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  providers: [DataBaseService, AuthService, AuthGuardsService],
=======
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [TasksService, HttpService],
>>>>>>> 202cd527e8412772fc53ace87ae243e4edf12869
  bootstrap: [AppComponent]
})
export class AppModule { }
