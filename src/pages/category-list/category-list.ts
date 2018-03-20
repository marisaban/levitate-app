import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BaseComponent } from '../../common/base-component'
import { ElevateAPI } from '../../providers/elevate-api'
import { Friend } from '../friends/friends'
import { ListDummyData } from '../../mocks/api/list-data'

@Component({
  selector: 'category-list-page',
  templateUrl: 'category-list.html'
})

/**
 * Heavily based on the-list.ts, but with some modifications.
 * Due to Ionic2 not supporting page inheritance, we have to copy and paste!
 */
export class CategoryListPage extends BaseComponent {
  list: Array<any>;
  inputList: Array<any>;
  distance: number = 500;
  pinActive: boolean = true;


  constructor(public navCtrl: NavController, protected api: ElevateAPI, navParams: NavParams) {
    super(navCtrl);
    this.inputList = navParams.get('list') || ListDummyData[0];
    this.list = this.filterList(this.inputList, this.distance);
  }

  //note: this function has changes from the-list.ts's filterList
  filterList(list: Array<any>, distance: number) {
    let newList = { ...list }
    newList['all'] = [];
    const FIELDS = ['contributors', 'influencers', 'connectors', 'elders'];

    FIELDS.forEach(field => {
      newList[field] = list[field].filter(x => x.distance <= distance)
      newList['all'] = newList['all'].concat(list[field].filter(x => x.distance <= distance));
    });
    return newList;
  }


  onRangeChange(event) {
    this.list = this.filterList(this.inputList, this.distance);
  }

  onPinClick() {
    this.pinActive = !this.pinActive;
  }


  onSearchKeyUp(phrase) {
    this.list = this.searchList(this.inputList, phrase);
  }

  searchList(list: Array<any>, phrase: String) {
    let filterFn = x => x.name.toLowerCase().indexOf(phrase.toLowerCase()) !== -1;

    let newList = { ...list }
    newList['all'] = [];

    const FIELDS = ['contributors', 'influencers', 'connectors', 'elders'];

    FIELDS.forEach(field => {
      newList[field] = list[field].filter(filterFn);
      newList['all'] = newList['all'].concat(list[field].filter(filterFn));
    })

    return newList;
  }


  distanceText() {
    const options = ['', 'ZipCode', 'City', 'County', 'Region', 'State', 'Timezone', 'Country', 'Continent', 'Globe'];
    const choice = Math.round(this.distance / 100);
    return options[choice];
  }

}
