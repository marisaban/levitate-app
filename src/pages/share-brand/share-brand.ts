import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { ContentPage } from '../content/content';
import { ElevateAPI } from '../../providers/elevate-api'
//import { AddFriendsPage } from '../add-friends/add-friends';
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
  constructor(public navCtrl: NavController, private api: ElevateAPI, public popoverCtrl: PopoverController) {
    super(navCtrl);
    
    
    
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
    console.log("hellooooo");
    this.navCtrl.push(CommentPage, {
      item: item
    });
  }

}
