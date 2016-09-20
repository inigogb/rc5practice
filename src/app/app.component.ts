import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { LoginService } from './login/services/login.service'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private router: Router, private loginService: LoginService) {}

}
