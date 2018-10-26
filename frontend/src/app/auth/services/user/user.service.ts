import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
// import { map, catchError } from 'rxjs/operators';
import { INewUserObject } from '../../interface';
import { IUser } from '../../interface';
import { IUserObject } from '../../interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedInUser = null;

  constructor(private _http: HttpClient) { }

  public isLoggedIn(): Observable<any> {
    return this._http.get('/api/dashboard')
      .pipe(
        tap(user => { this.loggedInUser = user })
      );
  }

  public createNewUser(newUserObject: INewUserObject): Observable<IUser> {
    return this._http.post<IUser>('/api/signup', newUserObject)
      .pipe(
        tap(user => { this.loggedInUser = user })
      );
  }

  public findUser( userObject: IUserObject): Observable<IUser> {
    return this._http.post<IUser>('/api/signin', userObject)
      .pipe(
        tap(user => { this.loggedInUser = user })
      );
  }
}
