import { Component, OnInit } from '@angular/core';
import { CustomerAuthenticationService } from '../service/authenticate/customer-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isAuthenticated :boolean;
  constructor(private custAuth:CustomerAuthenticationService) {
  }
  
  ngOnInit(): void {
    this.isAuthenticated=this.custAuth.isLoggedIn();
    console.log(this.isAuthenticated);
  }
  
}
