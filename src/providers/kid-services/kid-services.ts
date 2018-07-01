import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { KidsConfig } from '../../model/kidsDB'

@Injectable()
export class KidServicesProvider {

  private kidList = this.db.list<KidsConfig>("kidsdb")

  constructor(public db : AngularFireDatabase ) {
    console.log('Hello KidServicesProvider Provider');
  }

  addkid(newkid : KidsConfig){
    return this.kidList.push(newkid)
  }

  updatekid(kid : KidsConfig){
    return this.kidList.update(kid.key , kid)
  }

  deletekid(kid){
    return this.kidList.remove(kid)
  }

  getkid(){
    return this.kidList
  }

}
