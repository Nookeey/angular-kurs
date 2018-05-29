import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Janusz';
  surname = 'Nnnn';
  age = 23;
  pi = Math.PI;
  data = new Date();

  dog: Dog;

}

class Dog {
  constructor(public name: string, public age: number) {
  }
}
