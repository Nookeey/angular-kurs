import { DataBaseService } from './../../data-base.service';
import { Component, OnInit } from '@angular/core';
import { Courses } from '../../data-base.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  courses: Array<Courses>;

  constructor(private dbService: DataBaseService) { }

  ngOnInit() {
    this.dbService.getCourses().subscribe(list => {
      this.courses = list;
    });
  }

}
