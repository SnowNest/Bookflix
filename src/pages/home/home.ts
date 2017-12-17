import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { LectorPage } from '../lector/lector';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: Observable<any[]>;

  constructor(public navCtrl: NavController, afDB: AngularFireDatabase) {

    this.items = afDB.list('db_books').valueChanges();

  }

   options: any = {
    title: 'My PDF'
  }

  abrir(url){
    this.navCtrl.push(LectorPage, {"url":url});
  }

}
