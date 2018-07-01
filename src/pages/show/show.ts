import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { KidServicesProvider } from '../../providers/kid-services/kid-services';
import { KidsConfig } from '../../model/kidsDB';
import { AngularFireDatabase, AngularFireObject, } from 'angularfire2/database';
import { AdminPage } from '../admin/admin';


@IonicPage()
@Component({
  selector: 'page-show',
  templateUrl: 'show.html',
})
export class ShowPage {
  Password: string=''
  Email : string=''
  
  kidList : AngularFireObject<any>
  myKid : KidsConfig = {
    FirstName : '',
    LastName : '',
    Phone : '',
    Address : '',
    Stage : '',
    Password: '',
    Email : ''
  };

  itemArray =[];
  myObject = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, public alertCtrl: AlertController, 
    public edit: KidServicesProvider, db: AngularFireDatabase) {

      this.kidList = db.object("kidsdb");
      this.kidList.snapshotChanges().subscribe(fun => {
        if (fun.payload.val() == null || fun.payload.val() == undefined){
          console.log("no data")
        }
        else{
          this.itemArray.push(fun.payload.val())
          console.log(this.itemArray)
          this.myObject = Object.entries(this.itemArray[0])
          console.log(this.myObject)

        }
      });
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowPage');
  }

 show(key, FirstName, LastName, Phone, Address, Email,Password){
  let showKid = this.alertCtrl.create({
   // title: 'Show',
    message: "This is Data of kid",
    inputs: [
      {
        name: 'FirstName',
        value: FirstName
      },
      {
        name: 'LastName',
        value: LastName
      },
      {
        name: 'Phone',
        value: Phone
      },
      {
        name: 'Address',
        value: Address
      },
      {
        name: 'Email',
        value: Email
      },
     { 
       name: 'Password',
       value: Password
    },
    ],
    buttons: [
      {
        text: 'OK',
      },
    ]
  });
  showKid.present();
}


  update(editKid){
    this.edit.updatekid(editKid)
    console.log("updated")
    this.navCtrl.setRoot(AdminPage)
  }

  Delete(kid){
    this.edit.deletekid(kid)
    console.log("Deleted")
    this.navCtrl.setRoot(AdminPage)
  }

  showPrompt(key, FirstName, LastName, Phone, Address, Email,Password) {
    let prompt = this.alertCtrl.create({
      title: 'Edit',
      message: "Edit on Data of kids",
      inputs: [
        {
          name: 'FirstName',
          value: FirstName
        },
        {
          name: 'LastName',
          value: LastName
        },
        {
          name: 'Phone',
          value: Phone
        },
        {
          name: 'Address',
          value: Address
        },
        {
          name: 'Email',
          value: Email
        },
       { 
         name: 'Password',
         value: Password
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
          text: 'Save',
          handler: data => {
            this.myKid.FirstName = data.FirstName;
            this.myKid.LastName = data.LastName;
            this.myKid.Phone = data.Phone;
            this.myKid.Address = data.Address;
            this.myKid.Password = data.Password;
            this.myKid.key = key;
            console.log(this.myKid)
            this.update(this.myKid)
          }
        }
      ]
    });
    prompt.present();
  }

}
