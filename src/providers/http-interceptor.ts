import { Injectable } from '@angular/core';
import {
  Http,
  ConnectionBackend,
  RequestOptions,
  RequestOptionsArgs,
  Headers
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';



@Injectable()
export class HttpInterceptor extends Http {

  private petitions: any = [];
  private timeoutRequest: number = 10000;

  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
    super(backend, defaultOptions);
  }

  get(url: string, options?: RequestOptionsArgs): Observable<any> {
    return super.get(url, this.getRequestOptionArgs(options)).timeout(this.timeoutRequest)
    .finally(() => {
      this.onFinally();
    });
  }

  post(url: string, body: any = {}, options?: RequestOptionsArgs) {
    return super.post(url, body, this.getRequestOptionArgs(options)).timeout(this.timeoutRequest)
    .finally(() => {
      this.onFinally();
    });
  }

  put(url: string, body: any, options?: RequestOptionsArgs) {
    return super.put(url, body, this.getRequestOptionArgs(options)).timeout(this.timeoutRequest)
    .finally(() => {
      this.onFinally();
    });
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<any> {
    return super.delete(url, this.getRequestOptionArgs(options,true)).timeout(this.timeoutRequest)
    .finally(() => {
      this.onFinally();
    });
  }

  private getRequestOptionArgs(options?: RequestOptionsArgs, isDelete : boolean = false) : RequestOptionsArgs {
    if (options == null) {
      options = new RequestOptions();
    }
    if (options.headers == null) {
      options.headers = new Headers();
    }
    if(isDelete == false){
      options.headers.append('Content-Type', 'application/json');
    }

    // Descomentar para colocar y validar el user token en el header ajustando el servicio utilizado para el mismo
     if(localStorage.getItem('token')!==null){
       options.headers.append('token', localStorage.getItem("token"));
     }
    return options;
  }

  private onFinally(): void {
    if(this.petitions && this.petitions.length > 0) this.petitions.pop();
  }



}
