import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Angular';

  days = ['Poniedzialek', 'Wtorek', 'Sroda', 'Czwartek', 'Piatek', 'Sobota', 'Niedziela'];

  dogs = new Array<Dog>();

  constructor() {
    this.dogs.push(new Dog('Reksio', 4), new Dog('Łatek', 3), new Dog('Maksiu', 5));
  }

  isVisible = true;
  isHidden = false;

  show() {
    this.isVisible = !this.isVisible;
  }

  hidden() {
    this.isHidden = !this.isHidden;
  }

}

class Dog {
  constructor(public name: string, public age: number) {
  }
}
