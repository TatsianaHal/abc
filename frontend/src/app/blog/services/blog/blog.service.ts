import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private getPost = null;

  constructor(private _http: HttpClient) { }

  public getPosts(): Observable<any> {
    return this._http.get('/api/post')
      .pipe(
        tap(post => { this.getPost = post })
      );
  }
}
