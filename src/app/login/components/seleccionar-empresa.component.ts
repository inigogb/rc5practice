import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { LoginService } from '../services/login.service'

@Component({
  selector: 'seleccionar-empresa',
  templateUrl: 'app/login/components/seleccionar-empresa.component.html',
  styleUrls: ['app/login/components/seleccionar-empresa.component.css']
})
export class SeleccionarEmpresaComponent {

  constructor(private loginService: LoginService, private router: Router) {}

  selectEmpresa() {
    this.loginService.selectEmpresa()
    this.router.navigate(['login', 'seleccionar-modulo'])
  }

  logout() {
    this.loginService.logout()
    this.router.navigate(['/login'])
  }
}
