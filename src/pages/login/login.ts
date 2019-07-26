import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import { ApiService } from '../../providers/api-service/api-service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private formUser : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private formBuilder: FormBuilder, private api: ApiService) {
    this.formUser = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ionViewDidLoad() {}

  public doLogin(){
    this.api.postLogin(this.formUser.value.email, this.formUser.value.password).subscribe(res => this.successPostLogin(res), error => this.errorPostLogin(error));
  }

  successPostLogin(res: any) {
    console.log("login: ",res.token);
    this.navCtrl.setRoot(HomePage);
  }

  errorPostLogin(error: any) {
    console.log("ws error", error);
  }


}

