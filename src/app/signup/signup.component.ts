import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from '..//shared.service';
import { IUser } from './../../Models/user.interface';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {
  public user: IUser;
  subscription: Subscription;
  result: string;

  constructor(private _sharedSrv: SharedService) { }

  ngOnInit() {
    this.user = {
      name: '',
      password: '',
      email: '',
      dob: new Date(),
      age: 0,
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
