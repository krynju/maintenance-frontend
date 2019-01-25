import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable()
export class AuthGuardLevel implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate() {
    if (JSON.parse(localStorage.getItem('userData')).level === 0) {
      return true;
    }

    this.router.navigate(['/app/dashboard']);
    return false;
  }
}
