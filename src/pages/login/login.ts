import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

import { UsuariosProvider } from '../../providers/usuarios/usuarios';
import { HomePage } from '../../pages/home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _usuario: UsuariosProvider,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logIn(){

    let loading = this.loadingCtrl.create({

      content: "Espere por favor..."

    });

    loading.present();
    
    this._usuario.logIn().then( _dataUsuario => {

      this.navCtrl.push(HomePage);
      
      loading.dismiss();

    }).catch(error => {

      loading.dismiss();

      this.toastCtrl.create({

        message: 'ERROR de inicio se sesión',
        duration: 1500
      }).present();

      console.log("ERROR en logIn: "+JSON.stringify(error));

    });
  }

}
