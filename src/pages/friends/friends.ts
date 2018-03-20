import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ElevateAPI } from '../../providers/elevate-api'
import { ProfilePage } from '../../pages/profile/profile';
import { FriendDummyData } from '../../mocks/api/friends-data';
import { BaseComponent } from '../../common/base-component'
import { Item } from '../../models/item';

// import { FilterPipe } from '../pipes/filter/filter'
import { FilterPipe } from '../../pipes/filter/filter';

@Component({
    selector: 'page-friends',
    templateUrl: 'friends.html',
    //pipes: [FilterPipe]
})
export class FriendsPage extends BaseComponent {
    friendsList: Friend[];
     alphaFriends  = {"A": [], "B": [], "C": [], "D": [], "E": [], "F": [], "G": [], "H": [], "I": [], "J": [], "K": []
    , "L": [], "M": [], "N": [], "O": [], "P": [], "Q": [], "R": [], "S": [], "T": [], "U": [], "V": [], "W": [], "X": [], "Y": [], "Z": []};

    searchName: string;
    constructor(public navCtrl: NavController, private api: ElevateAPI) {
        super(navCtrl);
        this.friendsList = FriendDummyData;
        this.api.getFriends()
        .map(response => this.friendsList = response.json().results)
        .subscribe(result => this.friendsList = result[0]);
        var i = 0;
        for(i; i < this.friendsList.length; i++){
            this.addFriend(this.friendsList[i]);
        }
        console.log(i);
        console.log(this.alphaFriends);
    }

    addFriend(friend){
        switch(friend.name.split(" ")[1].substr(0,1).toUpperCase()) {
            case "A":
                this.alphaFriends["A"].push(friend);
                break;
            case "B":
                this.alphaFriends["B"].push(friend);
                break;
            case "C":
                this.alphaFriends["C"].push(friend);
                break;
            case "D":
                this.alphaFriends["D"].push(friend);
                break;
            case "E":
                this.alphaFriends["E"].push(friend);
                break;
            case "F":
                this.alphaFriends["F"].push(friend);
                break;
            case "G":
                this.alphaFriends["G"].push(friend);
                break;
            case "H":
                this.alphaFriends["H"].push(friend);
                break;
            case "I":
                this.alphaFriends["I"].push(friend);
                break;
            case "J":
                this.alphaFriends["J"].push(friend);
                break;
            case "K":
                this.alphaFriends["K"].push(friend);
                break;
            case "L":
                this.alphaFriends["L"].push(friend);
                break;
            case "M":
                this.alphaFriends["M"].push(friend);
                break;
            case "N":
                this.alphaFriends["N"].push(friend);
                break;
            case "O":
                this.alphaFriends["O"].push(friend);
                break;
            case "P":
                this.alphaFriends["P"].push(friend);
                break;
            case "Q":
                this.alphaFriends["Q"].push(friend);
                break;
            case "R":
                this.alphaFriends["R"].push(friend);
                break;
            case "S":
                this.alphaFriends["S"].push(friend);
                break;
            case "T":
                this.alphaFriends["T"].push(friend);
                break;
            case "U":
                this.alphaFriends["U"].push(friend);
                break;
            case "V":
                this.alphaFriends["V"].push(friend);
                break;
            case "W":
                this.alphaFriends["W"].push(friend);
                break;
            case "X":
                this.alphaFriends["X"].push(friend);
                break;
            case "Y":
                this.alphaFriends["Y"].push(friend);
                break;
            case "Z":
                this.alphaFriends["Z"].push(friend);
                break;
             default:
        }
    }

    goToUserProfile(item: Item){
        this.navCtrl.push(ProfilePage, {item: item});
    }

}

export interface Friend {
    name: String;
    about: String;
    elevateScore: Number;
    commonFriends: any[];
    commonInterests: any[]; //TODO ARC - Decide if need own interface
    totalFriends: number;
}
