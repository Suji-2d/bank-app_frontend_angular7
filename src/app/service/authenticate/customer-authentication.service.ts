import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerAuthenticationService {

  //loggedIn:boolean=false;
  constructor() { }

  isLoggedIn(){
    let cust = sessionStorage.getItem('authenticated');
    return !(cust===null);
  }
}
