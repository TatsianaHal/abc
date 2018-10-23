import { Component, OnInit } from '@angular/core';
import { SignupSigninService } from '../../services';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private appServiceComponents: SignupSigninService) {}
  user = {
    email: '',
    password: ''
  }

  userSubmit() {
    // this.appServiceComponents.createNewUser(this.user)
    //                          .subscribe(res => {console.log(res)});
  }

  ngOnInit() {
  }

}
