import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-signup-email',
  templateUrl: 'signup-email.html',
})
export class SignupEmailPage {
  public photos: any;
  public base64Image: string;
  public swapImage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {
  }

  ngOnInit(){
    this.photos = [];
    this.swapImage = document.getElementsByClassName("user-avatar");
  }

  takePhoto() {
    const options: CameraOptions = {
        quality: 50,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        targetWidth: 600,
        targetHeight: 600,
        saveToPhotoAlbum: false
    };
    
    this.camera.getPicture(options).then(
        imageData => {
          this.base64Image = "data:image/jpeg;base64," + imageData;
          this.swapImage.nativeElement.style = "display:none";
          this.photos.push(this.base64Image);
          this.photos.reverse();
          // this.sendData(imageData);
       },
       err => {
         console.log(err);
       }
    );
    }

  // clear the input fields
  clearInput(){
    console.log("clear");
  }

  launchLogin(){
    this.navCtrl.push(LoginPage);
  }

}
