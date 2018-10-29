import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private appServiceComponents: UserService,
              private router: Router) { }
  user = {
    email: '',
    password: ''
  }

  signinUser() {
    this.appServiceComponents.findUser(this.user)
                             .subscribe(res => {
                               if(this.user) {
                                 this.router.navigate(['dashboard']);
                               } else {
                                 window.alert('something is going wrong');
                               }
                              console.log(res);
                              });
  }
  ngOnInit() { }
}
