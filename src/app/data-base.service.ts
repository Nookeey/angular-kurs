import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  COURSES = [
    new Courses('1', 'Kurs JavaFX', 'Lorem sdas ds das dsa dsa dsa dsa dasd sa'),
    new Courses('2', 'Kurs OrmLite', 'Lorem ssadsa sddsa dsa dasd sa'),
    new Courses('3', 'Kurs Java 8', 'Lorem sdsdxcx csa dsa dasd sa'),
    new Courses('4', 'Kurs Angular', 'Lorem sdas ds dazxc hfdg ja dasd sa'),
  ];

  getCourses(): Observable<Array<Courses>> {
    return Observable.of(this.COURSES);
  }

  getCoursesById(id: string): Courses {
    return this.COURSES.find(e => e.id === id);
  }

  getRandomCourse() {
    const n = Math.floor(Math.random() * 3);
    return this.COURSES[n];
  }

}

export class Courses {
  constructor(public id: string, public title: string, public content: string) { }
}
