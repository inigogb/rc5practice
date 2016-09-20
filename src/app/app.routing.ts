import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component'
import { MenuComponent } from './menu/components/menu.component'
import { LoginService } from './login/services/login.service'
import { AuthGuard } from './auth.guard'

export const loginRoutes : Routes = [
  { path: 'login', loadChildren: 'app/login/login.module#LoginModule'}
]

export const appRoutes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full'},
  { path: 'menu', component: MenuComponent, canActivate: [AuthGuard] },
  ...loginRoutes,
  { path: '**', component: PageNotFoundComponent }
];

export const authProviders = [
  LoginService,
  AuthGuard
]

export const appRoutingProviders: any[] = [
  authProviders
];

export const routing = RouterModule.forRoot(appRoutes);
