import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { UsuariosProvider } from '../../providers/usuarios/usuarios';
import { MyApp } from '../../app/app.component';


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

      this.items = afDB.list('db_users/' + usr ).valueChanges();
      loading.dismiss();


    }).catch(error => {

      loading.dismiss();

      this.toastCtrl.create({

        message: 'ERROR en obtener el perfil',
        duration: 1500

      }).present();

      console.log("ERROR en perfil: " + JSON.stringify(error));

    });

  }

  logOut(){

    let loading = this.loadingCtrl.create({
      
            content: "Cargando perfil..."
      
          });
      
          loading.present();
      
          this._usuarioProvider.borrar_storage().then(usr => {


            this.navCtrl.push(MyApp);
      
            
            loading.dismiss();
      
      
          }).catch(error => {
      
            loading.dismiss();
      
            this.toastCtrl.create({
      
              message: 'ERROR en obtener el perfil',
              duration: 1500
      
            }).present();
      
            console.log("ERROR en perfil: " + JSON.stringify(error));
      
          });

  }
  

  ionViewDidLoad() {
    //console.log('ionViewDidLoad PerfilPage');
  }

}
