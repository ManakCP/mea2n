import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { IUser } from './../Models/user.interface';

@Injectable()
export class SharedService {

  // Variable Declarations
  private addUserSource = new Subject<IUser>();
  private getResultSource = new Subject<string>();

  // Subscribers
  sentUser$ = this.addUserSource.asObservable();
  sentResult$ = this.getResultSource.asObservable();

  // constructor() { }

  // Emitters
  sendUser(user: IUser) {
    this.addUserSource.next(user);
  }
  sendResult(result: string) {
    this.getResultSource.next(result);
  }
}
