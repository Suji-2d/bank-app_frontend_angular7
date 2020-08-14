import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Customer } from 'src/app/model';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  postId: any;
  
  custDetails:Customer;
 
  constructor(
    private http:HttpClient
  ) { }

  getLoginDetails(username:string){
    return this.http.get<Customer>('http://localhost:3000/Customer?Username='+username);
  }

  postLoginDetails(customer){

    return this.http.post('http://localhost:3000/Customer', customer).subscribe({
      next: data => console.log(data),
      error: error => console.error('There was an error!', error)})
  }
  
  putLoginDetails(newCust,oldCust){

    return this.http.post('http://localhost:3000/Customer/'+oldCust.id, newCust).subscribe({
      next: data => console.log(data),
      error: error => console.error('There was an error!', error)})
  }
  
}
