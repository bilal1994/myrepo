import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { FamilyPage } from '../family/family';
import { HomePage } from '../home/home';
import { KidsConfig } from '../../model/kidsDB';




@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  info = {
    email : '',
    password : ''
  }
  Kid : KidsConfig = {
    FirstName : '',
    LastName : '',
    Phone : '',
    Address : '',
    Stage : '',
    Email : '',
    Password: ''
  }; 

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public auth : AuthServiceProvider, public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  // login(){
  //   let create = {
  //     email : this.data.email,
  //     password : this.data.password
  //   }
  //   this.auth.SignIn(create).then( ()=> 
  //   this.navCtrl.setRoot(TabsPage),
  //   error => console.log("error")
  // )
  // }

  login() {
    const prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'Email',
          placeholder: 'Email'
        },
        {
          name: 'Password',
          placeholder: 'password',
          type: 'password'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Login',
          handler: data => {
            this.info.email = data.Email;
            this.info.password = data.Password;
            this.auth.SignIn(this.info).then(nav => {
            this.navCtrl.push(FamilyPage)
            console.log(nav);
            // {
            //   this.Kid.Email = nav.user.email,
            //   this.Kid.Password = nav.user.uid,
            //   this.Kid.FirstName = nav.user.displayName,
            //   this.Kid.Address = nav.user.Address
            // };
            //console.log('email' + this.Kid.Email,'password' + this.Kid.Password + 'fff' + this.Kid.FirstName + 'aaa' + this.Kid.Address)
            })
          }
        }
      ]
    });
    prompt.present();
    
  }
  
  logOut(){
    this.auth.signOut().then(() => (
      this.navCtrl.setRoot(HomePage)
    ))
  }

}


