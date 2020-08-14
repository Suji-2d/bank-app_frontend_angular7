import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../service/data/login-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name='';
  data:any;
  constructor(
    private router:Router,
    private dataService:LoginServiceService 
  ) { }

  ngOnInit(): void {
    //this.data=this.dataService.custDetails;
    //this.name=this.data.Name;
  }
logOut(){
  this.router.navigate(['logout']);
}
}
