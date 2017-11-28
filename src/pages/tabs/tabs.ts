import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { PerfilPage } from '../perfil/perfil';
import { AboutPage } from '../about/about';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  home: any;
  perfil: any;
  about: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.home = HomePage;
    this.perfil = PerfilPage;
    this.about = AboutPage;

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad TabsPage');
  }

}
