import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { ElevateAPI } from '../../providers/elevate-api'
import { Inject } from '@angular/core';

import {
    StackConfig,
    SwingStackComponent,
    SwingCardComponent
} from 'angular2-swing';

@Component({
    selector: 'swipe',
    templateUrl: 'swipe.html'
})

export class Swipe {
    @ViewChild('myswing1') swingStack: SwingStackComponent;
    @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;

    cards: Array<any>;
    stackConfig: StackConfig;
    recentCard: string = '';

    constructor(private api: ElevateAPI, @Inject('devMode') private devMode: boolean) {
        this.stackConfig = {
            throwOutConfidence: (offsetX, offsetY, element) => {
                return Math.min(Math.abs(offsetX) / (element.offsetWidth / 2), 1);
            },
            throwOutDistance: (d) => {
                return 800;
            }
        }
    }

    getTopics(count: number) {
        console.log("Swipe.getTopics called")
        this.api.getTopics(count)
            .map(data => data.json().results)
            .subscribe(result => {
                for (let val of result.reverse()) {
                    this.cards.push(val);
                }
            });
    }

    voteUp(like: boolean) {
        let removedCard = this.cards.pop();
        console.log('removedCard', removedCard, 'remaining cards', this.cards);
        // this.getTopics(1); //Get more topics from API? Constantly show more?
        this.api.postTopics(removedCard);
    }

    ngAfterViewInit() {
        this.cards = [];
        this.getTopics(1);
    }

}
