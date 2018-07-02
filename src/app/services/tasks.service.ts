import { User } from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { HttpService } from './http.service';
import { Task } from './../models/task';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, concat, } from 'rxjs';

@Injectable()
export class TasksService {

  private tasksListObs = new BehaviorSubject<Array<Task>>([]);

  constructor(private httpService: HttpService, public angularFire: AngularFireAuth) {
    angularFire.authState.subscribe(user => {
      if (user) {
        this.init();
      } else {
        this.tasksListObs.next([]);
      }
    });
  }

  init() {
    this.httpService.getTask().subscribe(list => {
      this.tasksListObs.next(list);
    });
  }

  add(task: Array<Task>) {
    const list = this.tasksListObs.getValue().concat(task);
    this.tasksListObs.next(list);
  }

  remove(task: Task) {
    const list = this.tasksListObs.getValue().filter( e => e !== task);
    this.tasksListObs.next(list);
  }

  done(task: Task) {
    task.end = new Date().toLocaleString();
    task.isDone = true;
    const list = this.tasksListObs.getValue();
    this.tasksListObs.next(list);
  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.tasksListObs.asObservable();
  }

  saveTaskInDb() {
    this.httpService.saveTasks(this.tasksListObs.getValue());
  }

}
