import { Component } from '@angular/core';
import { ElevateAPI } from '../../providers/elevate-api'
import { FriendDummyData } from '../../mocks/api/friends-data';
import { ViewController } from 'ionic-angular';
import { FilterPipe } from '../../pipes/filter/filter';

@Component({
  selector: 'page-select-keyword-modal',
  templateUrl: 'select-keyword-modal.html'
})
export class SelectKeywordPage {
  keywords:Keyword[] = [{"name": "Family", "clickedStyle": "unclicked"},{"name": "Friends", "clickedStyle": "unclicked"}, {"name":"Sports", "clickedStyle": "unclicked"}, {"name":"", "clickedStyle": "unclicked"},{"name": "", "clickedStyle": "unclicked"},{"name": "", "clickedStyle": "unclicked"},{"name": "", "clickedStyle": "unclicked"},{"name": "", "clickedStyle": "unclicked"},{"name":"", "clickedStyle": "unclicked"} ,{"name":"", "clickedStyle": "unclicked"}]
  saveStyle = "saveDisabled";
  amountClicked = 0;
  constructor(public viewCtrl: ViewController, private api: ElevateAPI) { 
  
  }

  closeModal(){
      this.viewCtrl.dismiss();
  }

  saveClicked(){
    if(this.amountClicked > 0){
      let data = {"keywords": this.keywords};
      this.viewCtrl.dismiss(data);
    }
  }

   keywordClicked(clickedCategory){
    if(clickedCategory != ""){
        for(var i = 0; i < this.keywords.length;i++){
          if(this.keywords[i].name == clickedCategory){
            if(this.keywords[i].clickedStyle == "clicked"){
              this.keywords[i].clickedStyle = "unclicked";  
              this.amountClicked = this.amountClicked - 1;          
            } else {
              this.amountClicked = this.amountClicked + 1;
              this.keywords[i].clickedStyle = "clicked";          
            }
            break;
          }
        }
        if(this.amountClicked > 0){
          this.saveStyle = "saveEnabled";
        } else {
          this.saveStyle = "saveDisabled";        
        }
      }
    }
  }

  export interface Keyword {
    name: String;
    clickedStyle: any;
}
