import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';

@Injectable()
export class UsuariosProvider {

  constructor(
    private afAuth: AngularFireAuth,
    private afDb: AngularFireDatabase,
    private storage: Storage,
    private plt: Platform
  ) {

  }

  logIn() {

    let promesa = new Promise((resolve, reject) => {

      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(result => {

        this.afDb.object("/db_users/" + result.additionalUserInfo.profile.id).update(result.additionalUserInfo.profile);

        this.guardar_storage(result.additionalUserInfo.profile.id);

        resolve(result.additionalUserInfo.isNewUser);

      });
    }).catch(error => console.log("Error en promesa Service: " + JSON.stringify(error)));

    return promesa;
  }

  actualizarUsuario(usr){
    console.log(usr);

  }

  guardar_storage(id) {
    let promesa = new Promise((resolve, reject) => {
      if(this.plt.is("cordova")){
        this.storage.set("user", id);
      }else{
        localStorage.setItem("user", id);
      }
      resolve();
    }).catch(error => console.log("Error en promesa Service: " + JSON.stringify(error)));
    return promesa;
  }

  obtener_storage() {
    let promesa = new Promise((resolve, reject) => {
      if(this.plt.is("cordova")){
        this.storage.ready().then(() => {
          this.storage.get("user").then( user => {
            resolve(user);
          })
        })
      }else{
        resolve(localStorage.getItem("user"));
      }      
    }).catch(error => console.log("Error en promesa Service: " + JSON.stringify(error)));
    return promesa;
  }
}
