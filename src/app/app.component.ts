import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Nauka angulara';
  dog = new Dog('Rex');
  show = true;

  changeTitle() {
    this.title = 'Angular jest fajny';
  }

  changeDog() {
    // this.dog = new Dog('Latek');
    this.dog.name = 'Ciapek';
  }

  nothing () {
  }

  destory() {
    this.show = !this.show;
  }

}

export class Dog {
  constructor (public name: string) {
  }
}
