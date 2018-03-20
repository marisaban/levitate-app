import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { BaseComponent } from '../../common/base-component';
import { SelectPhotoPage } from '../../pages/select-photo-modal/select-photo-modal';
import { SelectKeywordPage } from '../../pages/select-keyword-modal/select-keyword-modal';
import { SelectTagPage } from '../../pages/select-tag-modal/select-tag-modal';
import { CardsPage } from '../../pages/cards/cards';

/**
 * Generated class for the AddContentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-content',
  templateUrl: 'add-content.html',
})
export class AddContentPage extends BaseComponent {
  pickedImage = null;
  taggedFriends = [];
  keywordsClicked = [];
  tagString = "";
  keywordString = "";
  saveStyle = "saveDisabled";
  post = "";
  imageStyle = "image_not_uploaded";
  cancelStyle = "saveDisabled";
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    super(navCtrl);
  }

  cancelClicked(){
    this.taggedFriends = [];
    this.keywordsClicked = [];
    this.pickedImage = null;
    this.tagString = "";
    this.keywordString = "";
    this.saveStyle = "saveDisabled";
    this.post = "";
    //image box wouldn't go away on the live version without this
    this.imageStyle = "image_not_uploaded";

  }

  changePostText(text){
    if(text != ""){
      this.saveStyle = "saveEnabled"
      this.cancelStyle = "saveEnabled";
    } else {
      if(this.pickedImage == null){
       this.saveStyle = "saveDisabled";
      }
    }
  }

  makePost(){
    this.cancelClicked();
    this.navCtrl.parent.select(0); //Change tabs
  }

  selectPhoto(){
   let contactModal = this.modalCtrl.create(SelectPhotoPage, null, {cssClass: 'full-modal'});
   contactModal.onDidDismiss(data => {
     if(data!= null && data.imagePicked != null){
        this.pickedImage = data.imagePicked;
        this.saveStyle = "saveEnabled";
        this.imageStyle = "image_uploaded"
     } else {
      this.imageStyle = "image_not_uploaded"
       if(this.post == ""){
        this.saveStyle = "saveDisabled";
       }
     }
   });
   contactModal.present();
  }

  selectTags(){
  let tagModal = this.modalCtrl.create(SelectTagPage, null, {cssClass: 'full-modal'});
   tagModal.onDidDismiss(data => {
     if(data != null && data.friends != null){
      this.taggedFriends = [];
      for(var i = 0; i < data.friends.length; i++){
        if(data.friends[i].clickedStyle == "clicked"){
          this.taggedFriends.push(data.friends[i]);
        }
      }
    }
    if(this.taggedFriends.length == 1){
      this.tagString = "Tagged: " + this.taggedFriends[0].name;
    } else if(this.taggedFriends.length == 2){
      this.tagString = "Tagged: " + this.taggedFriends[0].name + " and " + this.taggedFriends[1].name;
    } else if(this.taggedFriends.length > 2) {
      this.tagString = "Tagged: " + this.taggedFriends[0].name + ", " + this.taggedFriends[1].name + " and " + (this.taggedFriends.length - 2) + " more."
    } else {
      this.tagString = "";
    }
   });
   tagModal.present();
  }

  selectKeywords(){
    let keywordModal = this.modalCtrl.create(SelectKeywordPage, null, {cssClass: 'full-modal'});
     keywordModal.onDidDismiss(data => {
       if(data != null && data.keywords != null){
        this.keywordsClicked = [];
        for(var i = 0; i < data.keywords.length; i++){
          if(data.keywords[i].clickedStyle == "clicked"){
            this.keywordsClicked.push(data.keywords[i]);
          }
        }
      }
      if(this.keywordsClicked.length == 1){
        this.keywordString = "Keywords: " + this.keywordsClicked[0].name;
      } else if(this.keywordsClicked.length == 2){
        this.keywordString = "Keywords: " + this.keywordsClicked[0].name + " and " + this.keywordsClicked[1].name;
      } else if(this.keywordsClicked.length > 2) {
        this.keywordString = "Keywords: " + this.keywordsClicked[0].name + ", " + this.keywordsClicked[1].name + " and " + (this.keywordsClicked.length - 2) + " more."
      } else {
        this.keywordString = "";
      }
    });
     keywordModal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddContentPage');
  }

}
