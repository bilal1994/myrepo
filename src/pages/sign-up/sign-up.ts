import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { AdminPage } from '../admin/admin';



@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  data = {
    email : '',
    password : ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public auth : AuthServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  signUp(){
    let create ={
      email : this.data.email,
      password : this.data.password
    }
    this.auth.SignUp(create).then(
      ()=> this.navCtrl.setRoot(AdminPage)
    )
  }

}
