import { Component, OnInit, Input } from '@angular/core';
import { LoginServiceService } from '../service/data/login-service.service';
import { CustomerAuthenticationService } from '../service/authenticate/customer-authentication.service';
import { Router } from '@angular/router';
import { Customer } from '../model'
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username=''
  password=''
  loginForm: FormGroup;

  invalidMsg='Invalid Password'
  invalidLogin:boolean=false
  constructor(
    private router:Router,
    private service:LoginServiceService,
    private custAuthentication:CustomerAuthenticationService,
    private formBuilder:FormBuilder) {
      this.loginForm = formBuilder.group({
          userName:[''],
          password: [''],
         });
        }

  ngOnInit(): void {
   
  }

  onSubmit(){

    this.username = this.loginForm.value.userName;
    this.password = this.loginForm.value.password;

   this.service.getLoginDetails(this.username).subscribe(
    response => this.validateCustomerLogin(response[0]),
    error=>console.error("DB connection failed"));
   
  }

  validateCustomerLogin(response){
  
  if(response==null)
  {
    this.router.navigate(['signup']);
    console.log("user not regitered/wrong username");
  }
  else{
    console.log(response);
    if(this.password==response.Password)
    {
     sessionStorage.setItem('authenticated',this.username);
     this.invalidLogin=true;
     this.router.navigate(['home'],);
     console.log("valid");
     this.service.custDetails = response;

     
     return true
    }
    else{
      this.invalidLogin=false;
      console.log("invalid cred");
    }
  }
  return false;
  }
  
}
