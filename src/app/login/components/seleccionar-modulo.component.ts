import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { LoginService } from '../services/login.service'

@Component({
  selector: 'seleccionar-modulo',
  templateUrl: 'app/login/components/seleccionar-modulo.component.html',
  styleUrls: ['app/login/components/seleccionar-modulo.component.css']
})
export class SeleccionarModuloComponent {

  constructor(private loginService: LoginService, private router: Router) {}

  getFunciones() {
    this.loginService.getFunciones()
    this.router.navigate(['/menu'])
  }

  logout() {
    this.loginService.logout()
    this.router.navigate(['/login'])
  }
}
