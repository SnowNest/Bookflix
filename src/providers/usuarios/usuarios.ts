import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class UsuariosProvider {

  constructor(
    private afAuth: AngularFireAuth,
    private afDb: AngularFireDatabase
  ) {

  }

  logIn() {

    let promesa = new Promise((resolve, reject) => {

      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(result => {

        this.afDb.object("/db_users/" + result.additionalUserInfo.profile.id).update(result.additionalUserInfo.profile);

        resolve(result.additionalUserInfo.isNewUser);

      });
    }).catch(error => console.log("Error en promesa Service: " + JSON.stringify(error)));

    return promesa;
  }

}
