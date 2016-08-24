import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { LoginService } from '../../login/services/login.service'

@Component({
  selector: 'menu',
  templateUrl: 'app/menu/components/menu.component.html',
  styleUrls: ['app/menu/components/menu.component.css']
})
export class MenuComponent {

  constructor(private router: Router, private loginService: LoginService) {}
  
  logout() {
    this.loginService.logout()
    this.router.navigate(['/login'])
  }
}
