import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly URL_DB = 'https://api.mlab.com/api/1/databases/angulardb/collections/tasks';
  readonly param = new HttpParams().set('apiKey', 'QbdkWkhUghQNntr2-oHRG7QWhVI5G6xJ');

  constructor(private http: HttpClient) {
    this.getTask();
  }

  getTask() {
    this.http.get(this.URL_DB, {params: this.param})
    .subscribe(tasks => {
      console.log(tasks);
    });
  }

  saveTasks(list: Array<Task>) {
    this.http.post(this.URL_DB, list, {params: this.param})
    .subscribe(data => {
      console.log(data);
    });
  }
}
