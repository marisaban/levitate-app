import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Platform, ViewController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { SelectTokenAmount } from '../select-token-modal/select-token-modal';
import { ConfirmPurchaseContent } from '../confirm-purchase-modal/confirm-purchase-modal';
import { CancelPurchaseContent } from '../cancel-purchase-modal/cancel-purchase-modal';
@Component({
  selector: 'page-buy-token-modal',
  templateUrl: 'buy-token-modal.html'
})
export class BuyModalContent {

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

  

  buyTokens() {
    let modal = this.modalCtrl.create(SelectTokenAmount, { tokenCount: this.tokenCount });
    modal.onDidDismiss(data => {
                //Get updated token count from modal.
                //Data can be null if modal is closed weirdly, e.g. by keyboard.
                if (data){
                    if(this.tokenCount < data["currTokens"]){
                      this.tokenCount = data["currTokens"];   
                      this.remove();
                    }else{
                      this.cancel();
                    }
                            
                }
            });
    modal.present();
    
  }
  remove() {
    let modal = this.modalCtrl.create(ConfirmPurchaseContent, { tokenCount: this.tokenCount });
    modal.onDidDismiss(data => {
                //Get updated token count from modal.
                //Data can be null if modal is closed weirdly, e.g. by keyboard.
                if (data){
                    this.tokenCount = data["currTokens"];              
                }
            });
    modal.present();
    this.viewCtrl.dismiss({ "currTokens": this.tokenCount });
  }
  cancel() {
    let modal = this.modalCtrl.create(CancelPurchaseContent, { tokenCount: this.tokenCount });
    modal.onDidDismiss(data => {
                //Get updated token count from modal.
                //Data can be null if modal is closed weirdly, e.g. by keyboard.
                if (data){
                    this.tokenCount = data["currTokens"];              
                }
            });
    modal.present();
    this.viewCtrl.dismiss({ "currTokens": this.tokenCount });
  }
  close(){
    this.viewCtrl.dismiss({ "currTokens": this.tokenCount });
  }
}