import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LectorPage } from './lector';

@NgModule({
  declarations: [
    LectorPage,
  ],
  imports: [
    IonicPageModule.forChild(LectorPage),
  ],
})
export class LectorPageModule {}
