import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Items } from '../../providers/providers';
import { BaseComponent } from '../../common/base-component'

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage extends BaseComponent {

  item: any;
  res: any;
  constructor(public navCtrl: NavController, navParams: NavParams, items: Items) {
        super(navCtrl);
        this.item = navParams.get('item') || items.defaultItem; 
        this.res = this.item.name.split(" ");
  }

  goBackToFriends(){
    this.navCtrl.pop();
  }
}
