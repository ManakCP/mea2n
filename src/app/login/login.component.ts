import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from '../shared.service';
import { ILogin } from './../../Models/user.interface';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit, OnDestroy {
  title: string;
  login: ILogin;
  result: string;
  subscription: Subscription;

  constructor(private _sharedSrv: SharedService) { }

  ngOnInit() {
    this.title = 'login works!!';
    this.login = { email: '', password: '' };
    this.subscription = this._sharedSrv.sentResult$.subscribe(res => this.result = res);
  }

  onLogin = () => {
    this._sharedSrv.sendLogin(this.login);
  }

  ngOnDestroy() {
     // this.subscription.unsubscribe();
   }
}
