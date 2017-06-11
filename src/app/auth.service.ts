import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IUser } from './../Models/user.interface';


@Injectable()
export class AuthService {

  private _url = 'http://localhost:3000';
  constructor(private _http: Http) { }

  getMsg(): Observable<string> {
      return this._http.get(this._url + '/user').map((Response: Response) => Response.text());
  }

  addUser(user: IUser): Observable<string> {
    return this._http.post(this._url + '/user', user).map(response => response.text());
  }
}
