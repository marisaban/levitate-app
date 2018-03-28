import { Component } from '@angular/core';
import { NavController, ViewController, App } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { SignupPage } from '../signup/signup'
import { LoginPage } from '../login/login';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
  animations: [
    trigger('animateLogo', [
      state('opaque', style({
      opacity: 1
      })),
      state('transparent', style({
      opacity: 0
      })),
      transition('opaque => transparent', animate('4000ms ease-in')),
      transition('transparent => opaque', animate('4000ms ease-out'))
    ])
  ]
})
export class WelcomePage {

  constructor(public navCtrl: NavController, private splashScreen: SplashScreen, public viewCtrl: ViewController, public appCtrl: App) { }

  // ionViewDidEnter() { 
  //   setTimeout(() => {
  //     this.navCtrl.push(SignupPage);
  //   }, 3000);
  // }

}
