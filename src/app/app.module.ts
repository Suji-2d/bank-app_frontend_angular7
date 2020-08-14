import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { MenuComponent } from './menu/menu.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    LogoutComponent,
    MenuComponent,
    ApplyLoanComponent,
    UpdateProfileComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },],
  bootstrap: [AppComponent]
})
export class AppModule { }
