import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private appServiceComponents: UserService,
              private router: Router) { }
  newUser = {
    email: '',
    firstname: '',
    lastname: '',
    password: ''
  }

  signupUser() {
    this.appServiceComponents.createNewUser(this.newUser)
                              .subscribe(res => {
                                if(this.newUser) {
                                  this.router.navigate(['dashboard']);
                                } else {
                                  window.alert('something is going wrong');
                                }
                              console.log(res);
                            });
  }
  ngOnInit() { }
}
