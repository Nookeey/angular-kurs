import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tasksList = ['Sprzatanie', 'Gotowanie', 'Nauka'];

  selected(task: string): void {
    console.log(task);
  }

}
