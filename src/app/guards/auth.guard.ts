import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  tokenValido?: string;
  constructor(private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
    this.tokenValido = localStorage.getItem('token');
    if (this.tokenValido) {
      return true;
    }else{
      
      this.router.navigateByUrl('/');
      return false;

    }
  }
  
}
