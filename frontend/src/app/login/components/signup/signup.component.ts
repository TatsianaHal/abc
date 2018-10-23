import { Component, OnInit } from '@angular/core';
import { SignupSigninService } from '../../services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

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
