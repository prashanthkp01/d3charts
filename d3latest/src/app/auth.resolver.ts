import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import {AuthService} from './shared/services/auth.service'

export interface Token {
  token: string;
}

@Injectable()
export class AuthResolver implements Resolve<any> {

constructor(private auth:AuthService){

}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return  this.auth.getAuthToken("./assets/models/auth.json");
    }
}
