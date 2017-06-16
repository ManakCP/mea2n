import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { SharedService } from './shared.service';
import { IUser, ILogin, IDashBoard } from './../Models/user.interface';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService, SharedService]
})
export class AppComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  title = 'mea2n app';

  constructor(private _authSrv: AuthService, private _sharedSrv: SharedService, private _router: Router) {
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
      .subscribe(res => (res['success']) === true
        ? (this.validUser(res['username']))
          : (this._sharedSrv.sendResult(res['message'])));
  }

  validUser = username => {
    const DashBoard: IDashBoard = {
      name: username,
      isLoggedInUser: true
    };

    this._router.navigate(['/dashboard']);
    // console.log(db);
  }

   ngOnDestroy() {
     this.subscription.unsubscribe();
   }

}
