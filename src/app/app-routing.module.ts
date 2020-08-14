import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { RouteGaurdService } from './service/route-gaurd.service'
import { LogoutComponent } from './logout/logout.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';

    
const routes: Routes = [
  {path: '',component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component:  RegisterComponent},
  {path: 'home', component:  HomeComponent,canActivate:[RouteGaurdService]},
  {path: 'logout', component: LogoutComponent},
  {path: 'updateProfile', component: UpdateProfileComponent,canActivate:[RouteGaurdService]},
  {path: 'applyLoan', component: ApplyLoanComponent,canActivate:[RouteGaurdService]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})




export class AppRoutingModule { }
