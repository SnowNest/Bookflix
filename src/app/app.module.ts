import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { UsuariosProvider } from '../providers/usuarios/usuarios';

import { IonicStorageModule } from '@ionic/storage';
import { DocumentViewer } from '@ionic-native/document-viewer';

export const firebaseConfig = {
  apiKey: "AIzaSyDd_aDgYgXG1-FN5Mk_5rJMdESW92OVH0I",
  authDomain: "bookflix-91190.firebaseapp.com",
  databaseURL: "https://bookflix-91190.firebaseio.com",
  projectId: "bookflix-91190",
  storageBucket: "bookflix-91190.appspot.com",
  messagingSenderId: "310102618200"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuariosProvider,
    DocumentViewer
  ]
})
export class AppModule {}
