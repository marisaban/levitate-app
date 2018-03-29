import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
// import { MainPage } from '../../pages/pages';
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
import { LaunchPage } from '../launch/launch';
import { User } from '../../providers/user';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: {
      email: string,
      password: string
  } = {
      email: 'test@example.com',
      password: 'test'
  };
  //facebook login 
  loginPage = LoginPage;
  isLoggedIn: boolean = false;
  users: any;
  // Our translated text strings
  private loginErrorString: string;
  constructor(public navCtrl: NavController,
      public user: User,
      public toastCtrl: ToastController,
      public translateService: TranslateService,
      private fb: Facebook,
      private splashScreen: SplashScreen,
      private statusBar: StatusBar) {
      this.statusBar.styleDefault();
      this.translateService.get('LOGIN_ERROR').subscribe((value) => {
          this.loginErrorString = value;
      })
      fb.getLoginStatus()
          .then(res => {
              console.log(res.status);
              if (res.status === "connect") {
                  this.isLoggedIn = true;
                  this.navCtrl.push(TabsPage);
              } else {
                  this.isLoggedIn = false;
              }
          })
          .catch(e => console.log(e));
  }
  ionViewDidLoad() {
      this.splashScreen.hide();
  }
  fbLogin() {
      this.fb.login(['public_profile', 'user_friends', 'email'])
          .then(res => {
              if (res.status === "connected") {
                  this.isLoggedIn = true;
                  this.getUserDetail(res.authResponse.userID);
              } else {
                  this.isLoggedIn = false;
              }
          })
          .catch(e => console.log('Error logging into Facebook', e));
  }
  login() {
  }
  fblogout() {
      this.fb.logout()
          .then(res => this.isLoggedIn = false)
          .catch(e => console.log('Error logout from Facebook', e));
  }
  getUserDetail(userid) {
      this.fb.api("/" + userid + "/?fields=id,email,name,picture,gender", ["public_profile"])
          .then(res => {
              console.log(res);
              this.users = res;
              this.navCtrl.push(TabsPage);
          })
          .catch(e => {
              console.log(e);
          });
  }

  // Attempt to login in through our User service
  doLogin() {
      this.user.login(this.account).subscribe((resp) => {
          this.navCtrl.push(TabsPage);
      }, (err) => {
          this.navCtrl.push(TabsPage);
          // Unable to log in
          let toast = this.toastCtrl.create({
              message: this.loginErrorString,
              duration: 3000,
              position: 'top'
          });
          toast.present();
      });
  }
  launchSignup() {
      this.navCtrl.push(SignupPage);
  }

  enterApp(){
    this.navCtrl.push(LaunchPage);
  }
}
