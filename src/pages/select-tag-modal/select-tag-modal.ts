import { Component } from '@angular/core';
import { ElevateAPI } from '../../providers/elevate-api'
import { FriendDummyData } from '../../mocks/api/friends-data';
import { ViewController } from 'ionic-angular';
import { FilterPipe } from '../../pipes/filter/filter';

@Component({
  selector: 'page-select-tag-modal',
  templateUrl: 'select-tag-modal.html'
})
export class SelectTagPage {
  friendsList: any[];  
  clickedFriends = [];
  saveStyle = "saveDisabled";
  amountClicked = 0;
  constructor(public viewCtrl: ViewController, private api: ElevateAPI) { 
    this.friendsList = FriendDummyData;
    this.api.getFriends()
    .map(response => this.friendsList = response.json().results)
    .subscribe(result => this.friendsList = result[0]);
    for(var i = 0; i < this.friendsList.length; i++){
      this.friendsList[i].clickedStyle = "unclicked";
    }
  }
  closeModal(){
     this.viewCtrl.dismiss();
  }

  saveClicked(){
    if(this.amountClicked > 0){
      let data = {"friends": this.friendsList};
      this.viewCtrl.dismiss(data);
    }
  }

  clickedFriend(friendName){
    for(var i = 0; i < this.friendsList.length;i++){
      if(this.friendsList[i].name == friendName){
        if(this.friendsList[i].clickedStyle == "clicked"){
          this.friendsList[i].clickedStyle = "unclicked";  
          this.amountClicked = this.amountClicked - 1;          
        } else {
          this.amountClicked = this.amountClicked + 1;
          this.friendsList[i].clickedStyle = "clicked";          
        }
        break;
      }
    }
    if(this.amountClicked > 0){
      this.saveStyle = "saveEnabled";
    } else {
      this.saveStyle = "saveDisabled";        
    }
  }
}

export interface Friend {
  name: String;
  about: String;
  elevateScore: Number;
  commonFriends: any[];
  commonInterests: any[]; //TODO ARC - Decide if need own interface
  totalFriends: number;
  clickStyle: any;
}
