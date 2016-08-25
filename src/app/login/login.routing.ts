import { RouterModule, Routes } from '@angular/router'
import { LoginParentComponent } from './components/login-parent.component'
import { LoginComponent } from './components/login.component'
import { SeleccionarEmpresaComponent } from './components/seleccionar-empresa.component'
import { SeleccionarModuloComponent } from './components/seleccionar-modulo.component'
import { LoginGuard } from './login.guard'

export const loginRoutes: Routes = [
  {
    path: 
  },
  {
    path: 'login',
    component: LoginParentComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'seleccionar-empresa', component: SeleccionarEmpresaComponent, canActivate: [LoginGuard] },
      { path: 'seleccionar-modulo', component: SeleccionarModuloComponent, canActivate: [LoginGuard] }
    ]
  }
]

export const loginRouting = RouterModule.forChild(loginRoutes)
