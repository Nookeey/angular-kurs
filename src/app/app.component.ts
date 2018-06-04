import { ChildComponent } from './child/child.component';
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tasksList = ['Sprzatanie', 'Gotowanie', 'Nauka angulara'];

  @ViewChild('childRef')
  childComponent: ChildComponent;

  @ViewChild('inputText')
  input: ElementRef;

  selected(task: string): void {
    console.log(task);
  }

  add(input: HTMLInputElement) {
    this.tasksList.push(input.value);
    // this.childComponent.tasks = [];
    this.input.nativeElement.value = '';
  }
}
