import { inject, TestBed } from '@angular/core/testing';
import { ApiService } from './api-service';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { HttpInterceptor } from '../http-interceptor';
import { ResponseOptions, Response,HttpModule, Http, BaseRequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';


describe('Api service', () => {
    let api: ApiService;
    let backend: MockBackend;

    beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [HttpClientTestingModule,HttpModule], 
          providers: [
            ApiService,
            MockBackend,
            BaseRequestOptions,
            {
              provide: HttpInterceptor,
              useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
                return new Http(backend, defaultOptions);
              },
              deps: [MockBackend, BaseRequestOptions],
            },
          ]
        });
      });

    beforeEach(inject([ ApiService, MockBackend ], (service: ApiService, _backend: MockBackend) => {
        api = service;
        backend = _backend;
    }));

    test('Login', () => {
        let response = new ResponseOptions({
          body: JSON.stringify(MockLogin)
        });
    
        const baseResponse = new Response(response);
    
        backend.connections.subscribe(
          (c: MockConnection) => c.mockRespond(baseResponse)
        );

        api.postLogin("emnir.ganimi@globant.com", "123456").subscribe(data => {
          expect(data).toEqual(MockLogin);
        });
      });
});

export const MockLogin = {
    'token': 'cdscds-fdsfsdff-fsdfsd-sdfsdsd'
}