import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController} from 'ionic-angular';
import { ElevateAPI } from '../../providers/elevate-api'
import { ModalContentPage } from '../add-friend-modal/add-friend-modal';
import { BuyModalContent } from '../buy-token-modal/buy-token-modal';

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {
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

checkNotification(event) {
  var check = document.getElementById("notification-tab");
  check.style.backgroundColor = "white";
}

}
