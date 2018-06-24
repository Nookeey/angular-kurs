import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  info: string;
  constructor(private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params['name']){
        this.info = 'Zaloguj sie do ' + params['name'];
      } else {
        this.info = null;
      }
    });
  }

  login(formData: NgForm) {
    this.authService.login(formData.value.email, formData.value.password);
  }

  signup(formData: NgForm) {
    this.authService.signup(formData.value.email, formData.value.password);
  }

}
