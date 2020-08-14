import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from '../model';
import { Subject } from 'rxjs';
import { LoginServiceService } from '../service/data/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  customer:Customer;
  //private subject = new Subject<Customer>();
  registerForm: FormGroup;

  constructor(private formBuilder:FormBuilder,private service:LoginServiceService,
    private router:Router) {

  this.registerForm = formBuilder.group({

    name: [''],

    userName:[''],

    password: [''],

    guardianType: [''],

    guardianName: [''],

    address: [''],

    citizenShip: [''],

    state: [''],

    country: [''],

    emailId: [''],

    gender: [''],

    maritalStatus: [''],

    contactNo: [''],

    dateOfBirth: [''],

    registrationDate: [''],

    accountType: [''],

    branchName: [''],

    citizenStatus: [''],

    initialDepositAmount: [''],

    idProofType: [''],

    idDocumentNo: [''],

    referenceAccountName: [''],

    referenceAccountNumber: [''],

    referenceAccountAddress: [''],

});
  }

  ngOnInit(): void {
  }

onFormSubmit(){
  //console.log(this.registerForm.value);
  this.customer=this.registerForm.value;
  //this.subject.subscribe(value => {this.customer = value})
    console.log(this.customer);
  this.service.postLoginDetails(this.customer);
  this.router.navigate(['Login'])

}


}
