import { NgModule, ErrorHandler } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule, Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { SwingModule } from 'angular2-swing';
import { Facebook } from '@ionic-native/facebook';

import { MyApp } from './app.component';

import { CardsPage } from '../pages/cards/cards';
import { ContentPage } from '../pages/content/content';
import { ProfilePage } from '../pages/profile/profile';
import { ProfileOtherPage } from '../pages/profile-other/profile-other';
import { ItemCreatePage } from '../pages/item-create/item-create';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { ListMasterPage } from '../pages/list-master/list-master';
import { LaunchPage } from '../pages/launch/launch';
import { LoginPage } from '../pages/login/login';
import { SignupEmailPage } from '../pages/signup-email/signup-email';
import { MapPage } from '../pages/map/map';
import { MenuPage } from '../pages/menu/menu';
import { SearchPage } from '../pages/search/search';
import { SettingsPage } from '../pages/settings/settings';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { WelcomePage } from '../pages/welcome/welcome';
import { SwipePage } from '../pages/swipe/swipe-page';
import { AddFriendsPage } from '../pages/add-friends/add-friends';
import { FriendsPage } from '../pages/friends/friends';
import { ModalContentPage } from '../pages/add-friend-modal/add-friend-modal';
import { CommentPage } from '../pages/comment-page/comment-page';
import { BuyModalContent } from '../pages/buy-token-modal/buy-token-modal';
import { SelectTokenAmount } from '../pages/select-token-modal/select-token-modal';
import { ConfirmPurchaseContent } from '../pages/confirm-purchase-modal/confirm-purchase-modal';
import { CancelPurchaseContent } from '../pages/cancel-purchase-modal/cancel-purchase-modal';
import { ListPage } from '../pages/the-list/the-list';
import { CategoryListPage } from '../pages/category-list/category-list';
import { AddContentPage } from '../pages/add-content/add-content';
import { SelectPhotoPage } from '../pages/select-photo-modal/select-photo-modal';
import { SelectTagPage } from '../pages/select-tag-modal/select-tag-modal';
import { SelectKeywordPage } from '../pages/select-keyword-modal/select-keyword-modal';
import { InviteFriendsPage } from '../pages/invite-friends/invite-friends';
import { InviteTabPage } from '../pages/invite-tab/invite-tab';
import { UserAccountPage } from '../pages/user-account/user-account';
import { ShareBrandPage } from '../pages/share-brand/share-brand';


import { Swipe } from '../common/swipe/swipe';
import { Api } from '../providers/api';
import { ElevateAPI } from '../providers/elevate-api';
import { Items } from '../mocks/providers/items';
import { Settings } from '../providers/settings';
import { User } from '../providers/user';

import { Camera } from '@ionic-native/camera';
import { GoogleMaps } from '@ionic-native/google-maps';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FilterPipe } from '../pipes/filter/filter'


//Toggle this to turn devMode on or off. Does things like hides dev-only options
//If you want to use this in your own component, look at common/swipe/swipe.ts
// const devMode = true;
const devMode = false;

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}


/**
 * The Pages array lists all of the pages we want to use in our app.
 * We then take these pages and inject them into our NgModule so Angular
 * can find them. As you add and remove pages, make sure to keep this list up to date.
 */
let pages = [
  MyApp,
  CardsPage,
  ContentPage,
  ItemCreatePage,
  ItemDetailPage,
  ListMasterPage,
  ConfirmPurchaseContent,
  CancelPurchaseContent,
  LoginPage,
  MapPage,
  MenuPage,
  SearchPage,
  SettingsPage,
  LaunchPage,
  SignupPage,
  SignupEmailPage,
  TabsPage,
  TutorialPage,
  WelcomePage,
  SwipePage,
  AddFriendsPage,
  FriendsPage,
  InviteFriendsPage,
  ModalContentPage,
  CommentPage,
  BuyModalContent,
  ProfilePage,
  SelectTokenAmount,
  ListPage,
  CategoryListPage,
  AddContentPage,
  ProfileOtherPage,
  SelectPhotoPage,
  SelectTagPage,
  SelectKeywordPage,
  InviteTabPage,
  UserAccountPage,
  ShareBrandPage,
  //Common reusable components
  Swipe,
];

export function declarations() {
  // return pages;
  let declarations = <any>pages.slice();
  declarations.push(FilterPipe);
  return declarations;
}

export function entryComponents() {
  return pages;
}

export function providers() {
  return [
    Api,
    ElevateAPI,
    Items,
    User,
    Camera,
    Facebook,
    GoogleMaps,
    SplashScreen,
    StatusBar,

    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    //Mock HTTP requests
    BaseRequestOptions,
    MockBackend,
     {
       provide: Http,
       deps: [MockBackend, BaseRequestOptions],
       useFactory: (backend, options) => { return new Http(backend, options); }
     },

     { provide: 'devMode', useValue: devMode }
  ];
}

@NgModule({
  declarations: declarations(),
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    SwingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    IonicModule.forRoot(MyApp, {
      mode: 'ios',
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: entryComponents(),
  providers: providers()
})
export class AppModule { }
