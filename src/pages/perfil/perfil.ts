import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { UsuariosProvider } from '../../providers/usuarios/usuarios';


@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  items: Observable<any[]>;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public afDB: AngularFireDatabase,
    private _usuarioProvider: UsuariosProvider,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController) {

    let loading = this.loadingCtrl.create({

      content: "Cargando perfil..."

    });

    loading.present();

    this._usuarioProvider.obtener_storage().then(usr => {

      this.items = afDB.list('db_users/' + usr).valueChanges();
      console.log(this.items);
      loading.dismiss();


    }).catch(error => {

      loading.dismiss();

      this.toastCtrl.create({

        message: 'ERROR de inicio se sesión',
        duration: 1500
      }).present();

      console.log("ERROR en logIn: " + JSON.stringify(error));

    });

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad PerfilPage');
  }

}
