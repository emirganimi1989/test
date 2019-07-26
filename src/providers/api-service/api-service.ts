import { Injectable } from '@angular/core';
import { HttpInterceptor } from '../http-interceptor';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


/*
  Generated class for the ApiService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiService {

  constructor(public http: HttpInterceptor) {
    console.log('Hello ApiService Provider');
  }

  postLogin(email: string, password: string){
   return this.http.post('https://private-519b16-test12643.apiary-mock.com/login', {email: email, password: password}).map(res => res.json()).catch((error: any) => Observable.throw(JSON.parse(error._body) || error));
  }

}
