import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { User } from './../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [AuthService]
})
export class SignupComponent implements OnInit {
public user:User
response
constructor(private _authService: AuthService) { }
  ngOnInit() {}

  onSubmit = value => {
    // user :User = { name: value.name, password: value.password, email: value.email, dob: value.dob };
    //console.log(value)
    this.user.name = value.name;
    this.user.password = value.password;
    this.user.email = value.email;
    this.user.dob = value.dob;

    this._authService.registerUser(this.user)
      .subscribe(res => this.response = res);
  }
}
