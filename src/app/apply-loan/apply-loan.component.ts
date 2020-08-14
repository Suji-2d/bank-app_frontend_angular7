import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
 
@Component({
  selector: 'app-apply-loan',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.css']
})
export class ApplyLoanComponent implements OnInit {
  applyLoanForm: FormGroup;
 
  educationalLoanForm: FormGroup;
 
  personalLoanForm: FormGroup;
 
  selectedLoanType:boolean = true;
   type="Educational Loan";
  constructor(private formBuilder: FormBuilder) {
 
    this.applyLoanForm = this.formBuilder.group({
 
      loanType: ['Educational Loan'],
 
      loanAmount: [''],
 
      loanApplyDate: [''],
 
      loanIssueDate: [''],
 
      rateOfInterest: [''],
 
      duration: ['']
    });
    this.buildForm();
 
  }
  ngOnInit(): void {
    
  
  }

  changeGender(){

if(this.type=="Educational Loan"){
  this.selectedLoanType=true;
}
else{
  this.selectedLoanType=false;
}
console.log(this.selectedLoanType);
console.log(this.type);
this.buildForm();
  }

buildForm(){
  this.educationalLoanForm = this.formBuilder.group({
 
    courseFee: [''],

    course: [''],

    fatherName: [''],

    fatherOccupation: [''], 

    fatherTotalExperience: [''],

    fatherCurrentExperience: [''],

    rationCardNo: [''],

    annualIncome: ['']

  });


  this.personalLoanForm =this.formBuilder.group({

    annualIncome: [''],

    companyName: [''],

    designation: [''],

    totalExperience: [''],

    currentExperience: ['']

  });
}
 
 
}