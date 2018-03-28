import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SwipePage } from '../swipe/swipe-page';

@IonicPage()
@Component({
  selector: 'page-launch',
  templateUrl: 'launch.html',
  animations: [
    trigger('animateState', [
      transition('void => *', [
          style({transform: 'translateX(-100%)'}),
          animate('2s ease-in')
      ]),
      transition('* => void', [
        animate('2s ease-out', style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class LaunchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidEnter() { 
    setTimeout(() => {
      this.navCtrl.push(SwipePage);
    }, 3000);
  }

}


