import { Component, OnInit } from '@angular/core';
import { Customer } from '../model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginServiceService } from '../service/data/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {


  newCustomer: Customer;
  existingCustomer: any;
  //private subject = new Subject<Customer>();
  updateForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: LoginServiceService,
    private router: Router) {
    this.updateForm = this.formBuilder.group({

      name: [''],

      userName: [''],

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
    let userName = sessionStorage.getItem('authenticated');
    console.log(userName);
    // this.service.getLoginDetails(userName).subscribe(
    //   response => this.setOldCust(response[0]),
    //   error => console.error("DB connection failed"));
    this.existingCustomer=this.service.custDetails;
    console.log(this.existingCustomer);
    this.setOldCust(this.existingCustomer);

  }

    setOldCust(response) {
    if (response != null){
      console.log(response.Name); 
      console.log(response); 
      this.updateForm.setValue({

        name:  response.Name,

        userName: response.Username,

        password: response.Password,

        guardianType: response.GuardianType ,

        guardianName: response.GuardianName,

        address: response.Address,

        citizenShip: response.Citizenship,

        state: response.State,

        country: response.Country,

        emailId: response.EmailAddress,

        gender: response.Gender,

        maritalStatus: response.MartialStatus,

        contactNo: response.ContactNo,
        dateOfBirth: response.DateOfBirth,

        registrationDate: response.RegistrationDate,

        accountType: response.AccountType,

        branchName:response.BranchName,

        citizenStatus: response.CitizenStatus,

        initialDepositAmount: response.InitialDepositAmount,

        idProofType: response.IdentificationProofType,

        idDocumentNo: response.IdentificationDocumentNo,

        referenceAccountName: response.ReferenceAccountHolderName,

        referenceAccountNumber: response.ReferenceAccountHolderAccNo,

        referenceAccountAddress:response.ReferenceAccountHolderAddress,

      });
      
    }
    else {
      console.log("null");
    }

  }

  onFormSubmit() {
    //console.log(this.registerForm.value);
    this.newCustomer = this.updateForm.value;
    //this.subject.subscribe(value => {this.customer = value})
    console.log(this.newCustomer);
    this.service.putLoginDetails(this.newCustomer, this.existingCustomer);
    this.router.navigate(['home'])

  }
}
