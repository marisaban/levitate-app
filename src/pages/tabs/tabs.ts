import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { CardsPage } from '../cards/cards';
import { SettingsPage } from '../settings/settings';
import { ListPage } from '../the-list/the-list';
import { FriendsPage } from '../friends/friends';
import { AddContentPage } from '../add-content/add-content'
import { SwipePage } from '../swipe/swipe-page';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = CardsPage;
  tab2Root: any = SwipePage;
  tab3Root: any = AddContentPage;
  tab4Root: any = FriendsPage;
  tab5Root: any = ListPage;


  constructor(public navCtrl: NavController, public translateService: TranslateService) {

  }
}
