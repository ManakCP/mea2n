import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './auth.service';
import { SharedService } from './shared.service';
import { IUser } from './../Models/user.interface';

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
  title = 'mea2n app';

  constructor(private _authSrv: AuthService, private _sharedSrv: SharedService) {
  }

  ngOnInit(): void {
     this.subscription = this._sharedSrv.sentUser$.subscribe(user => this.addUser(user));
  }

  addUser = (user: IUser) => {
    this._authSrv.addUser(user)
      .subscribe(res => this._sharedSrv.sendResult(res));
  }

   ngOnDestroy() {
     this.subscription.unsubscribe();
   }

}
