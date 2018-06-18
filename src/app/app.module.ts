import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app.routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DataBaseService } from './data-base.service';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { TemplateDriverComponent } from './about/template-driver/template-driver.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    AboutComponent,
    PageNotFoundComponent,
    CourseDetailComponent,
    CoursesListComponent,
    TemplateDriverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataBaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
