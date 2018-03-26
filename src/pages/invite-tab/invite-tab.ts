import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CardsPage } from '../cards/cards';
import { SettingsPage } from '../settings/settings';
import { ListPage } from '../the-list/the-list';
import { FriendsPage } from '../friends/friends';
import { InviteFriendsPage } from '../invite-friends/invite-friends';
import { AddContentPage } from '../add-content/add-content'
import { SwipePage } from '../swipe/swipe-page';

@IonicPage()
@Component({
  selector: 'page-invite-tab',
  templateUrl: 'invite-tab.html',
})
export class InviteTabPage {
  tab1Root: any = CardsPage;
  tab2Root: any = SwipePage;
  tab3Root: any = AddContentPage;
  tab4Root: any = InviteFriendsPage;
  tab5Root: any = ListPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
