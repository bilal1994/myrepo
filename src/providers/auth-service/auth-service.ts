import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'


@Injectable()
export class AuthServiceProvider {
  private user : firebase.User

  constructor(public myAuth : AngularFireAuth) {
    console.log('Hello AuthServiceProvider Provider');

    myAuth.authState.subscribe(assign => {
      this.user = this.user
    })
  }

  SignUp(create){
    console.log("sign Up")
    return this.myAuth.auth.createUserWithEmailAndPassword(create.email, create.password);
  }

  SignIn(create){
    console.log("sign in")
    return this.myAuth.auth.signInWithEmailAndPassword(create.email, create.password);
  }

  signOut(){
    return this.myAuth.auth.signOut()
  }
}
