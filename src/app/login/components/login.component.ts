import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'login',
  templateUrl: 'app/login/components/login.component.html',
  styleUrls: ['app/login/components/login.component.css']
})
export class LoginComponent {

  constructor(private loginService : LoginService, private router: Router) {}

  doLogin() {
    this.loginService.validate()
    if(this.loginService.isValidated) {
      this.router.navigate(['/seleccionar-empresa'])
    }
  }
}
