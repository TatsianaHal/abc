import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [SigninComponent, SignupComponent, SignupComponent, SigninComponent]
})
export class LoginModule { }
