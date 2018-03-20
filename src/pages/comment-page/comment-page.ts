import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Items } from '../../providers/providers';

@Component({
  selector: 'page-comment-page',
  templateUrl: 'comment-page.html'
})
export class CommentPage {
  item: any;
  comment: any;
  commentList: any[] = [
    {
      author: "Gloria May",
      body: "I can't believe this!",
      avatar: "Gloria_May.png",
    },
    {
      author: "David Hein",
      body: "Very cool!",
      avatar: "David_Hein.png",
    },
    {
      author: "Jason Simpson",
      body: "I'm very impressed",
      avatar: "Jason_Simpson.png",
    }
  ]

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items) {
    this.item = navParams.get('item') || items.defaultItem;
  }

    getItems(ev: any) {
      // set val to the value of the searchbar
      this.comment = ev.target.value;
    }

    makeComment(comment: string): void {
      console.log('Make comment!', comment);
      this.commentList.push({
        author: "Jonathan Brink",
        body: comment,
        avatar: "Seth_Rivers.png", //TODO, get proper photo from jonathan in assets. Very low priority.
      });

    }
}
