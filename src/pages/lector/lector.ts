import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { PdfViewerModule } from 'ng2-pdf-viewer';

@IonicPage()
@Component({
  selector: 'page-lector',
  templateUrl: 'lector.html',
})
export class LectorPage {

  pdfSrc: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.pdfSrc = this.navParams.get("url");
    
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LectorPage');
  }

}
