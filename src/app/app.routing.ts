import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/components/login.component'
import { SeleccionarEmpresaComponent } from './login/components/seleccionar-empresa.component'
import { SeleccionarModuloComponent } from './login/components/seleccionar-modulo.component'
import { PageNotFoundComponent } from './page-not-found.component'
import { MenuComponent } from './menu/components/menu.component'
import { LoginService } from './login/services/login.service'
import { LoginGuard } from './login/login.guard'
import { AuthGuard } from './auth.guard'

export const appRoutes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'seleccionar-empresa', component: SeleccionarEmpresaComponent, canActivate: [LoginGuard] },
  { path: 'seleccionar-modulo', component: SeleccionarModuloComponent, canActivate: [LoginGuard] },
  { path: 'menu', component: MenuComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent }
];

export const authProviders = [
  LoginService,
  LoginGuard,
  AuthGuard
]

export const appRoutingProviders: any[] = [
  authProviders
];

export const routing = RouterModule.forRoot(appRoutes);
