import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { CommentPage } from '../comment-page/comment-page';

import { Platform, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-add-friend-modal',
  templateUrl: 'add-friend-modal.html'
})
export class ModalContentPage {

  payBothTokens: boolean = false;

  character;
  tokenCount;
  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public popoverCtrl: PopoverController
  ) {
    this.tokenCount = params.get('tokenCount');
  }

  popup() {
    console.log('popup', this.tokenCount)
    var popup = document.getElementById("infoPopup");
    popup.classList.toggle("show");
    
  }

  buyTokens() {
    console.log('buyTokens', this.tokenCount);
    let tokensUsed = 1;
    if (this.payBothTokens) {
      tokensUsed = 2;
    }
    if(this.tokenCount >= tokensUsed){
      this.tokenCount = this.tokenCount - tokensUsed;
      this.viewCtrl.dismiss({ "currTokens": this.tokenCount });
    }else{
      this.payBothTokens = false;
      //this.viewCtrl.dismiss({ "currTokens": this.tokenCount });
    }
  }
 
  cancel() {
    this.viewCtrl.dismiss({ "currTokens": this.tokenCount });
  }
}