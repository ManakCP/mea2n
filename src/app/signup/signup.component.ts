import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from '../shared.service';
import { IUser } from './../../Models/user.interface';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit, OnDestroy {
  public user: IUser;
  subscription: Subscription;
  title: string;
  result: string;

  constructor(private _sharedSrv: SharedService) { }

  ngOnInit() {
    this.title = 'New User..??';
    this.user = {
      name: '',
      password: '',
      email: '',
      dob: new Date(),
      age: 0,
      isLoggedInUser: false
    };
    this.subscription = this._sharedSrv.sentResult$.subscribe(res => this.result = res);
  }

  onSubmit = () => {
     this._sharedSrv.sendUser(this.user);
  }

  ngOnDestroy() {
     this.subscription.unsubscribe();
   }
}
