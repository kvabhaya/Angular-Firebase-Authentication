import { Component } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat";
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private auth:AngularFireAuth) {
  }
  GoogleAuth(){
    return this.trigger(new GoogleAuthProvider());
  }
  trigger(provider:any):any
    {
      try {
        return this.auth.signInWithPopup(provider).then((result) => {
          console.log(result);
          console.log('You are Successfully logged in');
        })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    }

}
