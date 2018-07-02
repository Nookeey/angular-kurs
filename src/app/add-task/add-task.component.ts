import { AuthService } from './../auth/auth.service';
import { TasksService } from './../services/tasks.service';
import { Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  addForm: FormGroup;

  constructor(private tasksService: TasksService, private authService: AuthService) {
  }

  ngOnInit() {
    this.addForm = this.initForm();
  }

  initForm() {
    return new FormGroup({
      taskName: new FormArray([new FormControl(null, Validators.required)])
    });
  }

  add() {
    const tasksList = this.createTasksList();
    this.tasksService.add(tasksList);
    this.addForm = this.initForm();
  }

  createTasksList(): Array<Task> {
    const tasksList = new Array<Task>();
    const taskArr = <[string]>this.addForm.get('taskName').value;
    taskArr.forEach(taskName => {
      const task = {name: taskName, userId: this.authService.user.uid, created: new Date().toLocaleString(), isDone: false };
      tasksList.push(task);
    });
    return tasksList;
  }

  addField() {
    const arr = <FormArray>this.addForm.get('taskName');
    arr.push(new FormControl(null, Validators.required));
  }

}
