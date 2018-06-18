import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driver',
  templateUrl: './template-driver.component.html',
  styleUrls: ['./template-driver.component.css']
})
export class TemplateDriverComponent implements OnInit {

  @ViewChild('conctactForm')
  conctactForm: NgForm;

  message = new TemplateMssage();
  courses = ['Angular', 'JavaFx', 'Java8', 'OrmLite'];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(conctactForm) {
    console.log(conctactForm);
    console.log(this.message);
    this.reset();
  }

  reset() {
    this.message = new TemplateMssage();
    this.conctactForm.resetForm(this.message);
  }

}

class TemplateMssage {
  constructor(
    public topic?: string,
    public message?: string,
    public name?: string,
    public email?: string,
    public course = 'Angular',
    public bot?: boolean
  ) {

  }
}
