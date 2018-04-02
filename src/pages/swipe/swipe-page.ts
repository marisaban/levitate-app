import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import { ElevateAPI } from '../../providers/elevate-api'
import { BaseComponent } from '../../common/base-component'
import { ListPage } from '../the-list/the-list';

/**
 * Problem: Right now all cards are treated the same, but in design it says
 * there are 4 tiers of items in this section:
 *      topics, categories, subcategories, keywords.
 * 
 * What's their relationship in the app (don't care about DB for now)?
 * 
 * Do we need to 
 */


import {
    StackConfig,
    // Stack,
    // Card,
    // ThrowEvent,
    // DragEvent,
    SwingStackComponent,
    SwingCardComponent
} from 'angular2-swing';

@Component({
    selector: 'page-swipe',
    templateUrl: 'swipe-page.html'
})
export class SwipePage extends BaseComponent {
    @ViewChild('myswing1') swingStack: SwingStackComponent;
    @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;

    cards: Array<any>;
    stackConfig: StackConfig;
    recentCard: string = '';

    constructor(public navCtrl: NavController, private http: Http, private api: ElevateAPI) {
        super(navCtrl);
        this.stackConfig = {
            throwOutConfidence: (offsetX, offsetY, element) => {
                return Math.min(Math.abs(offsetX) / (element.offsetWidth / 2), 1);
            },
            throwOutDistance: (d) => {
                return 800;
            }
        }


    }

    //ARC TODO - Extract API calls out to a service
    getTopics(count: number) {
        console.log("Swipe.getTopics called")
        this.api.getTopics(count)
            .map(data => data.json().results)
            .subscribe(result => {
                for (let val of result) {
                    this.cards.push(val);
                }
            });
    }

    //ARC TODO - Mock API response! POST id of the card.
    voteUp(like: boolean) {
        let removedCard = this.cards.pop();
        console.log('removedCard', removedCard, 'remaining cards', this.cards);
        // this.getTopics(1); //Get more topics from API? Constantly show more?
        this.api.postTopics(removedCard);
    }

    launchList() {
        this.navCtrl.push(ListPage);
    }

    ngAfterViewInit() {
        this.cards = [];
        this.getTopics(1);
    }

}
