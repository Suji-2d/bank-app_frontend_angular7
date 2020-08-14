import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CustomerAuthenticationService } from './authenticate/customer-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGaurdService implements CanActivate{

  constructor(private custAuthentication:CustomerAuthenticationService,
    private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.custAuthentication.isLoggedIn()){
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
