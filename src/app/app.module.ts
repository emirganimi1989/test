import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ApiService } from '../providers/api-service/api-service';
import { HttpInterceptor } from '../providers/http-interceptor';
import { XHRBackend, RequestOptions, HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    HttpInterceptor,
    SplashScreen,
    {
      provide: HttpInterceptor,
      useFactory: httpProviderFunction,
      deps: [XHRBackend, RequestOptions]
    },
    ApiService
  ]
})
export class AppModule {}

export function httpProviderFunction(backend: XHRBackend, options: RequestOptions) {
  return new HttpInterceptor(backend, options);
}
