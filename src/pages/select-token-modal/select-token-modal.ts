import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Platform, ViewController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-select-token-modal',
  templateUrl: 'select-token-modal.html'
})
export class SelectTokenAmount {

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

  

  tenTokens() {
    this.tokenCount = 10;
    this.viewCtrl.dismiss({ "currTokens": this.tokenCount });
  }
  twentyFiveTokens(){
    this.tokenCount = 25;
    this.viewCtrl.dismiss({ "currTokens": this.tokenCount });
  }
  fiftyTokens(){
    this.tokenCount = 50;
    this.viewCtrl.dismiss({ "currTokens": this.tokenCount });
  }

  cancel() {
    this.viewCtrl.dismiss({ "currTokens": this.tokenCount });
  }
}