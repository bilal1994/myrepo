import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import { KidServicesProvider } from '../../providers/kid-services/kid-services';
import { KidsConfig } from '../../model/kidsDB';
import { AdminPage } from '../admin/admin';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


@IonicPage()
@Component({
  selector: 'page-add-new',
  templateUrl: 'add-new.html',
})
export class AddNewPage {

  addkid : KidsConfig ={
    FirstName : '',
    LastName : '',
    Phone : '',
    Address : '',
    Stage : '',
    Password: '',
    Email: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public add : KidServicesProvider, public alertCtrl: AlertController,
    public myAuth : AngularFireAuth, public authi :AuthServiceProvider) {
  }

  ionViewDidLoad() {
    console.log("your email : " + this.myAuth.auth.currentUser.email)
    console.log('ionViewDidLoad AddNewPage');
  }

  addnew(addkid){
      addkid.Email = this.myAuth.auth.currentUser.email
      addkid.Password = this.myAuth.auth.currentUser.uid
      console.log(addkid.Email + '......... ' + addkid.Password)
      this.add.addkid(addkid).then(() => this.showAlert())
      this.navCtrl.setRoot(AdminPage).then(() =>{
        this.authi.signOut()
      })
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'New Kid',
      subTitle: 'New kid was added',
      buttons: ['OK']
    });
    alert.present();
  }


}
