import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from './login/services/login.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: LoginService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.authService.isLoggedIn) {
      return true;
    }

    this.authService.redirectUrl = state.url

    this.router.navigate(['/login']);
    return false;
  }
}
