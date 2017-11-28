import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';

import { UsuariosProvider } from '../providers/usuarios/usuarios';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private _usuarioProvider: UsuariosProvider) {

    platform.ready().then(() => {
      
      this._usuarioProvider.obtener_storage().then(usr => {
        
        if(usr){
          this.rootPage = TabsPage;
        }else{
          this.rootPage = LoginPage
        }        
        statusBar.styleDefault();
        splashScreen.hide();
        
      })      
    });
    
  }

}

