import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AdminPage } from '../admin/admin';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Password : any;

  constructor(public navCtrl: NavController, public alert: AlertController) {

  }

  admin() {
    const prompt = this.alert.create({
      title: 'Login',
      message: "Enter the Password, please",
      inputs: [
        {
          name: 'Password',
          placeholder: 'Password',
          type: 'password'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: data => {
            this.Password= data.Password;
            if (this.Password == 1234) {
              this.navCtrl.setRoot(AdminPage)
            }
            else{
              this.navCtrl.setRoot(HomePage)
            }
          }
        }
      ]
    });
    prompt.present();
  }
  
  family(){
    this.navCtrl.push(LoginPage)
  }

}
