import { NavController } from 'ionic-angular';
import { AddFriendsPage } from '../pages/add-friends/add-friends';

export class BaseComponent {
  cardItems: any[];

  constructor(public navCtrl: NavController) {
  }

  gotoAddFriendsPage(){
    this.navCtrl.push(AddFriendsPage);
  }
}