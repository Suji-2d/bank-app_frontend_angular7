import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerAuthenticationService } from '../service/authenticate/customer-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    sessionStorage.removeItem('authenticated');
  }
  logIn(){
    this.router.navigate(['login']);
  }
}
