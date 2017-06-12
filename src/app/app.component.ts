import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './auth.service';
import { SharedService } from './shared.service';
import { IUser, ILogin } from './../Models/user.interface';

import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService, SharedService]
})
export class AppComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  user: IUser;
  login: ILogin;
  title = 'mea2n app';

  constructor(private _authSrv: AuthService, private _sharedSrv: SharedService) {
  }

  ngOnInit(): void {
     this.subscription = this._sharedSrv.sentUser$.subscribe(user => this.addUser(user));
     this.subscription = this._sharedSrv.sentLogin.subscribe(login => this.validateUser(login));
  }

  addUser = (user: IUser) => {
    this._authSrv.addUser(user)
      .subscribe(res => this._sharedSrv.sendResult(res));
  }

  validateUser = (login: ILogin) => {
    this._authSrv.validateUser(login)
      .subscribe(res => res['success'] === true
        ? console.log(res['message'])
          : this._sharedSrv.sendResult(res['message']));
  }

   ngOnDestroy() {
     this.subscription.unsubscribe();
   }

}
