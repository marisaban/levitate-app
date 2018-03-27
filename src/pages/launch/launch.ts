import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { trigger, state, style, transition, animate } from '@angular/animations';

@IonicPage()
@Component({
  selector: 'page-launch',
  templateUrl: 'launch.html',
  animations: [
    trigger('animateState', [
      transition('void => *', [
          style({transform: 'translateX(-100%)'}),
          animate('500ms ease-out')
      ]),
      transition('* => void', [
          animate('500ms ease-in', style({transform: 'translateX(100%'}))
      ])
    ])
  ]
})
export class LaunchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('');
  }

}
