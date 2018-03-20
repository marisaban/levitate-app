import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ElevateAPI {

    /**
     * [Auth] - Make API request with JWT
     * [Infinite Scroll] TODO - Ensure API can handle infinite scroll
     *      - e.g. include offset in requests.
     */


    constructor(private http: Http) {

    }

    logError(err) {
        console.error('There was an error: ' + err);
    }

    // AUTHENTICATION
    // All authenticated requests use JWT, so should have a `token` field.

    // TOPICS

    //[Infinite Scroll] [TODO]
    //Need way to get related and unseen topics.
    getTopics(count: number) {
        console.log("API.getTopics called");
        return this.http.get('https://api.elevate.com/topics?');
    }

    // [Auth] Final copy should take array
    postTopics(removedCard: { id: number} ){
        return this.http.post('https://api.elevate.com/topics', { 
            interested: removedCard.id
        });
    }

    // FEED

    // [Auth] [Infinite Scroll]
    getFeed(){
        console.log("API.getFeed called");
        // return this.http.post('https://api.elevate.com/feed?', body)
        return this.http.get('https://api.elevate.com/feed?')   
        
    }

    // FRIENDS
    // [Auth] [Infinite Scroll]
    getSuggestedFriends(){
        return this.http.get('https://api.elevate.com/friends/suggested?')
    }

    getFriends(){
        return this.http.get('https://api.elevate.com/friends?')
    }


}

interface AuthenticatedGETRequest {
    token: string
}