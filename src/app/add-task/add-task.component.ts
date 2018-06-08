import { TasksService } from './../services/tasks.service';
import { Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  newTask: string;

  constructor(private tasksService: TasksService) {
  }

  ngOnInit() {
  }

  add() {
    const task: Task = ( {name: this.newTask, created: new Date()} );
    this.tasksService.add(task);
    this.newTask = '';
  }

}
