import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Api } from './api';
import { Item } from '../models/item';

@Injectable()
export class BrandsProvider {
  items: Item[] = [];

  defaultItem: any = {
    "brand": "Victornox Cologne",
    "profilePic": "assets/img/speakers/bear.jpg",
    "link": "https://www.google.ca/"
  };

  constructor(public http: Http, public api: Api) {
/*
    let items = [
      {
        "brand": "Victornox Cologne",
        "profilePic": "assets/img/speakers/bear.jpg",
        "link": "https://www.google.ca/"
      },
      {
        "brand": "J Brand",
        "profilePic": "assets/img/speakers/bear.jpg",
        "link": "https://www.google.ca/"
      },
      {
        "brand": "Michael Kors",
        "profilePic": "assets/img/speakers/bear.jpg",
        "link": "https://www.google.ca/"
      },
      {
        "brand": "Rolex",
        "profilePic": "assets/img/speakers/bear.jpg",
        "link": "https://www.google.ca/"
      }
    ];
*/
  }


}
