import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtService } from '../utils/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (JwtService.isTokenExpired() == false) {
      const userRole = JwtService.getClaim('role');
      if (userRole === 'ADMIN') {
        return true;
      }
    }
    JwtService.removeToken();
    this.router.navigate(['/login']);
    return false;
  }
}
