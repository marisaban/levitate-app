import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShareBrandPage } from './share-brand';

@NgModule({
  declarations: [
    ShareBrandPage,
  ],
  imports: [
    IonicPageModule.forChild(ShareBrandPage),
  ],
  exports: [
    ShareBrandPage
  ]
})
export class ShareBrandPageModule {}
