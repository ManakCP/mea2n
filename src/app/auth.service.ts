import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Config } from '../../config';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IUser, ILogin } from './../Models/user.interface';


@Injectable()
export class AuthService {

  private _url = (new Config()).service_host;
  constructor(private _http: Http) { }

  addUser(user: IUser): Observable<string> {
    return this._http.post(this._url + '/user', user).map(response => response.text());
  }

  validateUser(login: ILogin): Observable<string> {
    return this._http.post(this._url + '/login', login).map(response => response.json());
  }
}
