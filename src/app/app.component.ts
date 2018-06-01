import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  profession = 'programista';
  skill = 'Angular';

  constructor() {
  }

  saveP(event) {
    this.profession = event.target.value;
  }

  saveS(event) {
    this.skill = event.target.value;
  }

}
