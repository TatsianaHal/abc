import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { map, catchError } from 'rxjs/operators';
import { INewUserObject } from '../../interface';
import { IUser } from '../../interface';
import { IUserObject } from '../../interface';

@Injectable({
  providedIn: 'root'
})
export class SignupSigninService {

  constructor(private _http: HttpClient) {
  }

  createNewUser(newUserObject: INewUserObject): Observable<IUser> {
    return this._http.post<IUser>('/api/signup', newUserObject);
  }

  findUser( userObject: IUserObject): Observable<IUser> {
    return this._http.post<IUser>('/api/signup', userObject);
  }
}
