import { Component } from '@angular/core';
import { ElevateAPI } from '../../providers/elevate-api'
import { ModalController } from 'ionic-angular';
// import { ModalController, NavParams } from 'ionic-angular';
import { NavController } from 'ionic-angular';
// import { Platform, ViewController } from 'ionic-angular';
import { ModalContentPage } from '../add-friend-modal/add-friend-modal';
import { BuyModalContent } from '../buy-token-modal/buy-token-modal';
import { AlertController } from 'ionic-angular';
@Component({
    selector: 'page-add-friends',
    templateUrl: 'add-friends.html'
})


/**
 * Due to a Typescript bug, we can't make this class extend BaseComponent. 
 * Likely due to some mispackaging due to circularity (as BaseComponent adds navigation to this page).
 */
export class AddFriendsPage {
    tokenCount = 2;
    addFriendsList: Array<any>;
    constructor(public navCtrl: NavController, private api: ElevateAPI, public modalCtrl: ModalController, private alertCtrl: AlertController) {
        this.api.getSuggestedFriends()
            .map(data => data.json().results)
            .subscribe(result => {
                this.addFriendsList = result;
            })
    }

    openModal(item) {
        if(item.img == "unhidden"){
            item.img = "hidden";

        }
        if (item.clicked == "light" && item.type == "Add Friend" && this.tokenCount > 0) {
            
            
            let modal = this.modalCtrl.create(ModalContentPage, { tokenCount: this.tokenCount });
            modal.onDidDismiss(data => {
                //Get updated token count from modal.
                //Data can be null if modal is closed weirdly, e.g. by keyboard.
                if (data){
                    
                    if(this.tokenCount > data["currTokens"]){
                        item.type = "Invitation Sent";
                        item.clicked = "primary";
                    }
                    this.tokenCount = data["currTokens"];   
                                     
                }
            });
            modal.present();

        } else if(item.clicked != "primary") {
            let modal = this.modalCtrl.create(BuyModalContent, { tokenCount: this.tokenCount });
            modal.onDidDismiss(data => {
                //Get updated token count from modal.
                //Data can be null if modal is closed weirdly, e.g. by keyboard.
                if (data){
                    this.tokenCount = data["currTokens"];                                    
                }
            });
            modal.present();
            item.clicked = "light";
        }



    }
    gotoAddFriendsPage() {
        return null;
    }

}


