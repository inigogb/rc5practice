import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { LoginService } from '../../login/services/login.service'

@Component({
  selector: 'menu',
  templateUrl: 'app/menu/components/menu.component.html',
  styleUrls: ['app/menu/components/menu.component.css']
})
export class MenuComponent implements OnInit {

  menuOptions: Array<Object> = [];
  isMenuActive: boolean = false;

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit() {
    this.menuOptions = [
      {
        name: 'contabilidad'
      },
      {
        name: 'ventas'
      },
      {
        name: 'facturacion'
      },
      {
        name: 'reportes'
      },
      {
        name: 'mantenimiento'
      },
      {
        name: 'catalogos'
      },
      {
        name: 'almacenamiento'
      },
      {
        name: 'controladores'
      },
      {
        name: 'servicios'
      },
      {
        name: 'base de datos'
      },
      {
        name: 'grupos'
      },
      {
        name: 'compras'
      }
    ];
  }

  logout() {
    this.loginService.logout()
    this.router.navigate(['/login'])
  }

  openMenu(start) {
    if(this.isMenuActive) {
      start.close();
      this.isMenuActive = false
    } else {
      start.open();
      this.isMenuActive = true;
    }

  }

  option(menu) {
    console.log(menu);
  }
}
