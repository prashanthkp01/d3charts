import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import {AuthService} from './auth.service'

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private auth:AuthService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.auth && this.auth.authToken && this.auth.authToken["token"]){
      request = request.clone({
      setHeaders: {
        Authorization: `Bearer `+this.auth.authToken["token"]
      }
    });
    }  
    return next.handle(request);
  }
}