<<<<<<< HEAD
import { AuthService } from './auth/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
=======
import { TasksService } from './services/tasks.service';
import { Component, OnInit } from '@angular/core';
>>>>>>> 202cd527e8412772fc53ace87ae243e4edf12869

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public authService: AuthService, private router: Router){ }

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }

}
