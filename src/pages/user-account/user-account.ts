import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';
import { ListPage } from '../the-list/the-list';
// need to create share a brand page
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-user-account',
  templateUrl: 'user-account.html',
})
export class UserAccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  pushProfile(){
    this.navCtrl.push(ProfilePage);
  }

  pushList(){
    this.navCtrl.push(ListPage);
  }

  logOut(){
    this.navCtrl.push(LoginPage);
  }

}
