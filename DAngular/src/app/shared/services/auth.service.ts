import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {
authToken:string;
  constructor(private http: HttpClient) { }

   //reusable method to handle all http request method "GET"
  //Pass url along with path/query patrameters if any
  getAuthToken(url:string): Observable<any> {
    return this.http.get(url).map(response => {
      return response;
    }).catch(this.handleError)
  }

//handle errors here
  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body["error"] || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
