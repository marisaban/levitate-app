import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Platform, ViewController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-confirm-purchase-modal',
  templateUrl: 'confirm-purchase-modal.html'
})
export class ConfirmPurchaseContent {

  payBothTokens: boolean = false;

  character;
  tokenCount;
  constructor(
    public platform: Platform,
    public params: NavParams,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController
  ) {
    this.tokenCount = params.get('tokenCount');
  }

  

 
  cancel() {
    
    this.viewCtrl.dismiss({ "currTokens": this.tokenCount });
  }
}