import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { IUser, ILogin } from './../Models/user.interface';

@Injectable()
export class SharedService {

  // Variable Declarations
  private addLoginSource = new Subject<ILogin>();
  private addUserSource = new Subject<IUser>();
  private getResultSource = new Subject<string>();

  // Subscribers
  sentLogin = this.addLoginSource.asObservable();
  sentUser$ = this.addUserSource.asObservable();
  sentResult$ = this.getResultSource.asObservable();

  // constructor() { }

  // Emitters
  sendLogin = (login: ILogin) => { this.addLoginSource.next(login); };
  sendUser = (user: IUser) => { this.addUserSource.next(user); };
  sendResult = (result: string) => { this.getResultSource.next(result); };
}
