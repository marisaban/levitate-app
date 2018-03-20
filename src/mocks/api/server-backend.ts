import { Response, ResponseOptions } from '@angular/http';

import { FriendDummyData } from './friends-data';
import { FeedDummyData } from './feed-data';

let hasRun = false;
export function SetupMockedBackend(c) {
    if (!hasRun) {
        setupAllResponses(c);
        hasRun = true;
    }
    makeResponse(c);
}

function setupAllResponses(c) {

    setupResponses(c, "https://api.elevate.com/topics?", {
        results: TOPICS
    })

    setupResponses(c, "https://api.elevate.com/feed?", {
        results: FeedDummyData
    });

    setupResponses(c, "https://api.elevate.com/friends/suggested?", {
        //ARC TODO - Finish off these responses.  Get proper data and structure backend.
        results: [
            {
                uuid: "1",
                name: "Avery Nelson",
                picture: 'assets/img/Avery_Nelson.png',
                clicked: "primary",
                type: "Friend Request",
                img: 'hidden',
                star: 'ConnectionOn.svg',
                similar: {
                    friends: "27 Similar Friends",
                    interests: "26 Similar Interests",
                }
            },
            {
                name: "Bart Tramor",
                picture: 'assets/img/Bart_Tramor.png',
                type: "Invitation Sent",
                clicked: "primary",
                img: 'hidden',
                star: 'Connection.svg',
                similar: {
                    friends: "20 Similar Friends",
                    interests: "18 Similar Interests",
                }
            },
            {
                name: "Jennifer Watson",
                picture: 'assets/img/Jennifer_Watson.png',
                clicked: "light",
                type: "Add Friend",
                img: 'unhidden',
                star: 'ConnectionOn.svg',
                similar: {
                    friends: "137 Similar Friends",
                    interests: "9 Similar Interests",
                }
            },
            {
                name: "David Bose",
                picture: 'assets/img/David_Bose.png',
                clicked: "light",
                type: "Add Friend",
                img: 'unhidden',
                star: 'Connection.svg',
                similar: {
                    friends: "15 Similar Friends",
                    interests: "20 Similar Interests",
                }
            },
            {
                name: "Bradley Chu",
                picture: 'assets/img/Bradley_Chu.png',
                clicked: "light",
                type: "Add Friend",
                img: 'unhidden',
                star: 'ConnectionOn.svg',
                similar: {
                    friends: "16 Similar Friends",
                    interests: "15 Similar Interests",
                }
            },
            {
                name: "Seth Rivers",
                picture: 'assets/img/Seth_Rivers.png',
                clicked: "light",
                type: "Add Friend",
                img: 'unhidden',
                star: 'Connection.svg',
                similar: {
                    friends: "27 Similar Friends",
                    interests: "8 Similar Interests",
                }
            },
            {
                name: "Wendy Paige",
                picture: 'assets/img/Wendy_Paige.png',
                clicked: "light",
                type: "Add Friend",
                img: 'unhidden',
                star: 'ConnectionOn.svg',
                similar: {
                    friends: "90 Similar Friends",
                    interests: "2 Similar Interests",
                }
            },
        ]
    });

    setupResponses(c, "https://api.elevate.com/friends?", {
        results: [
            FriendDummyData
        ]
    });

}

let mockedResponses = {};

function setupResponses(c, url, responseBody) {
    mockedResponses[url] = responseBody;
}

function makeResponse(connection) {
    console.log("makeResponse called");
    if (typeof mockedResponses[connection.request.url] == 'object') {
        connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockedResponses[connection.request.url])
        })))
    }
    else {
        console.log("Missed URL for response:", connection.request.url);
    }
}

/**
* Idea: relalatedIDs are stored so that if a user says they like a topic we can show them related topics.
*  e.g., if a user says they like sports, we show them various sports teams
* - discuss this feature with jonathan
* - ideally, relations between ids should be detected by user behaviour and dynamically updated over time – machine learning / recommendation system.
* - also, ids here should be unique hashes not numbers
*/
const TOPICS = [
    {
        id: "1",
        name: "Sports",
        picture: null,
        relatedIDs: [1, 3]
    },
    {
        id: "2",
        name: "NFL",
        picture: "http://i.nflcdn.com/static/content/public/static/img/share/shield.jpg",
        relatedIDs: [2, 3]
    },
    {
        id: "3",
        name: "Raiders (NFL)",
        picture: "./assets/img/oakland.png",
          relatedIDs: [1, 2]
    },
    {
        id: "4",
        name: "Derek Carr",
        picture: "http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/16757.png&w=350&h=254",
        relatedIDs: [1, 2]
    }
]
