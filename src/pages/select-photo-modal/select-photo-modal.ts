import { Component } from '@angular/core';

import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-select-photo-modal',
  templateUrl: 'select-photo-modal.html'
})
export class SelectPhotoPage {
  assetPos = "./assets/img/photo_gallery/";
  img = [{"img": this.assetPos + "homeless.jpg", "border": "normal"},{"img": this.assetPos + "trump.jpg", "border": "normal"},{"img": this.assetPos + "group.jpg", "border": "normal"},{"img": this.assetPos + "guns.jpg", "border": "normal"},{"img": this.assetPos + "police.jpg", "border": "normal"},{"img": this.assetPos + "luke-skywalker.jpg", "border": "normal"},{"img": this.assetPos + "Jonathan.jpg", "border": "normal"},{"img": this.assetPos + "fire.jpg", "border": "normal"},{"img": this.assetPos + "kammok.jpg", "border": "normal"}];
  imgPicked = null;
  saveStyle = "saveDisabled"
  constructor(public viewCtrl: ViewController) { }
  closeModal(){
     this.viewCtrl.dismiss();
  }

  pickPhoto(numPicked){
    console.log("Pick photo: " + numPicked)
    this.saveStyle = "saveEnabled"
    if(this.imgPicked != null){
      this.img[this.imgPicked].border = "normal";
    }

    if(this.imgPicked == numPicked){
      this.img[numPicked].border = "normal";
      this.saveStyle = "saveDisabled";
      this.imgPicked = null;
    } else {
      this.img[numPicked].border = "clicked";
      this.saveStyle = "saveEnabled";
      this.imgPicked = numPicked;
    }

  }

  saveClicked(){
    if(this.imgPicked != null){
      let data = {"imagePicked": this.img[this.imgPicked].img};
      this.viewCtrl.dismiss(data);
    }
  }

}
