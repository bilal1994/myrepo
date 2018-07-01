import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-single-show',
  templateUrl: 'single-show.html',
})
export class SingleShowPage {

    FirstName : string
    LastName : string
    Phone : string
    Address : string
    Stage : string
    Email : string
    Password : string


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.FirstName = this.navParams.get("FirstName")
    this.LastName = this.navParams.get("LastName")
    this.Phone = this.navParams.get("Phone")
    this.Address = this.navParams.get("Address")
    this.Stage = this.navParams.get("Stage")
    this.Email = this.navParams.get("Email")
    this.Password = this.navParams.get("Password")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingleShowPage');
  }

}
