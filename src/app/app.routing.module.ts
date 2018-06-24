<<<<<<< HEAD
import { Level2Component } from './secret/level2/level2.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { SecretComponent } from './secret/secret.component';
import { AuthGuardsService } from './auth/auth-guards.service';
import { Level1Component } from './secret/level1/level1.component';
=======
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DoneTaskComponent } from './done-task/done-task.component';
>>>>>>> 202cd527e8412772fc53ace87ae243e4edf12869

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'todoTask',
    pathMatch: 'full'
  },
  {
    path: 'todoTask',
    component: TodoTaskComponent
  },
  {
    path: 'doneTask',
    component: DoneTaskComponent
  },
<<<<<<< HEAD
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'secret',
    component: SecretComponent,
    // canActivate: [AuthGuardsService],
    canActivateChild: [AuthGuardsService],
    children: [
      {
        path: 'level1',
        component: Level1Component
      },
      {
        path: 'level2',
        component: Level2Component
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
=======
>>>>>>> 202cd527e8412772fc53ace87ae243e4edf12869
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
