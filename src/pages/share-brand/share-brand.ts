import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { ElevateAPI } from '../../providers/elevate-api'
import { BaseComponent } from '../../common/base-component'
import { CommentPage } from '../comment-page/comment-page';
import { PopoverController } from 'ionic-angular';




@IonicPage()
@Component({
  selector: 'page-share-brand',
  templateUrl: 'share-brand.html',
})
export class ShareBrandPage extends BaseComponent {
  cardItems: any[];
  data: Array<{title: string, details: string, icon: string, showDetails: boolean}> = [];  
  //
  tokenCount = 2;
  addFriendsList: Array<any>;
  constructor(public navCtrl: NavController, private api: ElevateAPI, public popoverCtrl: PopoverController) {
    super(navCtrl);

    this.api.getSuggestedFriends()
    .map(data => data.json().results)
    .subscribe(result => {
        this.addFriendsList = result;
    })
    
    this.cardItems = [];

    this.api.getFeed()
      .map(data => data.json().results)
      .subscribe(result => {
        for (let val of result) {
          this.cardItems.push(val);
        }
      });
  }
  openItem(item: any) {
    this.navCtrl.push(CommentPage, {
      item: item
    });
  }

}
