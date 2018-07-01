import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { KidsConfig } from '../../model/kidsDB';
import { AngularFireAuth } from 'angularfire2/auth';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-family',
  templateUrl: 'family.html',
})
export class FamilyPage {

  kidList : AngularFireObject<any>

  myKid : KidsConfig = {
    FirstName : '',
    LastName : '',
    Phone : '',
    Address : '',
    Stage : '',
    Email : '',
    Password: ''
  };

  itemArray =[];
  myObject =[]

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public db: AngularFireDatabase, public myAuth : AngularFireAuth,
  public store : Storage) {
    
    this.kidList = db.object('kidsdb')
    this.kidList.snapshotChanges().subscribe(getKid => {
      if (getKid.payload.val() == null || getKid.payload.val() == undefined){
        console.log("no data")
      }
      else{
        this.itemArray.push(getKid.payload.val())
        console.log(this.itemArray)
        this.myObject = Object.entries(this.itemArray[0])
        console.log(this.myObject)
      }

      this.myObject.forEach(element => {
        if (this.myAuth.auth.currentUser.uid == element[1]['Password']) {
          this.myKid.FirstName = element[1]['FirstName']
          this.myKid.LastName = element[1]['LastName']
          this.myKid.Phone = element[1]['Phone']
          this.myKid.Address = element[1]['Address']
          this.myKid.Stage = element[1]['Stage']
          this.myKid.Email = element[1]['Email']
          this.myKid.Password = element[1]['Password']
        }
      else {
        console.log("no data")
      }
      
      });
    });
  }
  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad FamilyPage');
  }

}
