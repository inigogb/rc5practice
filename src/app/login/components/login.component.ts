import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'login',
  templateUrl: 'app/login/components/login.component.html',
  styleUrls: ['app/login/components/login.component.css']
})
export class LoginComponent {

  btnEnable: boolean = true
  usuario: string = ""
  password: string = ""

  constructor(private loginService : LoginService, private router: Router) {}

  onChange() {
    if(this.usuario !== "" && this.password !== "") {
      this.btnEnable = false
    } else {
      this.btnEnable = true
    }
  }

  doLogin() {
    this.loginService.validate()
    if(this.loginService.isValidated) {
      this.router.navigate(['/seleccionar-empresa'])
    }
  }
}
