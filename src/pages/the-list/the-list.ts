import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BaseComponent } from '../../common/base-component'
import { ElevateAPI } from '../../providers/elevate-api'
import { Friend } from '../friends/friends'
import { CategoryListPage } from '../category-list/category-list';
import { ProfilePage } from '../../pages/profile/profile';


import { ListDummyData } from '../../mocks/api/list-data'

@Component({
  selector: 'list-page',
  templateUrl: 'the-list.html'
})
export class ListPage extends BaseComponent {

  // friendsList: Friend[];
  list: Array<any>;
  distance: number = 500;
  pinActive: boolean = true;

  constructor(public navCtrl: NavController,
    protected api: ElevateAPI) {
    super(navCtrl);
    this.list = this.filterListByDistance(ListDummyData, this.distance);
  }


  goToListCategory(category) {
    console.log('goToListCategory with:', category);
    this.navCtrl.push(CategoryListPage, { list: category });
  }

  goToUserProfile(user) {
    this.navCtrl.push(ProfilePage, { item: user }, { animate: false });
  }


  filterListByDistance(list: Array<any>, distance?: number) {
    return this.filterList(list, x => x.distance <= distance);
  }

  searchList(list: Array<any>, phrase: String) {
    return this.filterList(list, x => x.name.toLowerCase().indexOf(phrase.toLowerCase()) !== -1)
  }

  filterList(list: Array<any>, filterFn: Function) {
    let newList = list.map(x => Object.assign({}, x));
    const FIELDS = ['contributors', 'influencers', 'connectors', 'elders'];

    list.forEach((element, index) => {
      FIELDS.forEach(field => {
        newList[index][field] = element[field].filter(filterFn)
      })
    });

    return newList;
  }

  distanceText() {
    const options = ['', 'ZipCode', 'City', 'County', 'Region', 'State', 'Timezone', 'Country', 'Continent', 'Globe'];
    const choice = Math.round(this.distance / 100);
    return options[choice];
  }

  onRangeChange(event) {
    this.list = this.filterListByDistance(ListDummyData, this.distance);
  }

  onPinClick() {
    this.pinActive = !this.pinActive;
  }

  onSearchKeyUp(phrase) {
    this.list = this.searchList(ListDummyData, phrase);
    //Q for J - Do we also put this through distance filter?
  }

}

interface ListFriend extends Friend {
  // distance: number;
  distanceCategory: DistanceCategories;
}


export interface ListCategory {
  name: ListCategoryTypes,
  users: Friend[],
  contributors: Friend[],
  influencers: Friend[],
  connectors: Friend[],
  friends: Friend[],
  elders: Friend[],
}


enum DistanceCategories {
  Me,
  ZipCode,
  City,
  County,
  Region,
  State,
  Timezone,
  Country,
  Continent,
  Globe
}

//ARC - Typescript 2.3 might not handle string enums properly, could lead to serialization errors.
enum ListCategoryTypes {
  Overall,
  News,
  Sports,
  Entertainment,
  Technology,
  Food,
  Health,
  Politics
}
