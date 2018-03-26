import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InviteTabPage } from './invite-tab';

@NgModule({
  declarations: [
    InviteTabPage,
  ],
  imports: [
    IonicPageModule.forChild(InviteTabPage),
  ],
  exports: [
    InviteTabPage
  ]
})
export class InviteTabPageModule {}
