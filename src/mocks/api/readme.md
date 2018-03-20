To get some of the dummy JSON, I'm using this site: http://www.json-generator.com/
Currently we're only focusing on the `results` portion of the API.

Also using https://randomuser.me/ for some API images

PRINCIPLES
==========
* Everything should have a guid.
* ??? Response should also include API requests prebuilt, e.g.
  ```javascript
  //ARC TODO: Re-read HATEOAS section in O'Reily book
  {
    results: [...],
    api: {
      nextPage: "api/requests?after=39u3417-73",
      commonFriends: "api/friends?common=i934-181",
    }
  }
  ```


LIST
==========

Friends:

```javascript
[
  '{{repeat(100)}}',
  {
    guid: '{{guid()}}',
    name: '{{firstName()}} {{surname()}}',
//    picture: 'http://placehold.it/32x32',
    picture: function (tags) {
      var res = [];
      var count = 1;
      //      var count = 2;
      for (var i = 0; i < count; i++){    
        var fruits = ['./assets/img/Elizabeth_Caprini.png', './assets/img/David_Hein.png', './assets/img/Gloria_May.png', './assets/img/Jason_Simpson.png', './assets/img/Chris_Flay.png'];
        res.push(fruits[tags.integer(0, fruits.length - 1)]);
      }
      return res[0];
    },
    elevateScore: '{{integer(20, 150)}}',
    totalFriends: '{{integer(10, 300)}}',
    about: "I'm a curious person interested in making new friends",
    
    commonFriends: [
      //This is just a copy of the above.
    	'{{repeat(0, 3)}}',
      {
        guid: '{{guid()}}',
	    name: '{{firstName()}} {{surname()}}',
    	picture: 'http://placehold.it/32x32',
	    elevateScore: '{{integer(20, 150)}}',
    	totalFriends: '{{integer(10, 300)}}',
		about: "I'm a curious person interested in making new friends"
      }
    ],
    commonInterests: function (tags) {
      var res = [];
      var count = Math.ceil((Math.random() * 5));
//      var count = 2;
      for (var i = 0; i <= count; i++){    
		var fruits = ['Wine', 'Movies', 'Politics', 'Sports', 'Computers', 'Travelling', 'Photography', 'Wordworking', 'Backpacking', 'Cooking'];
		res.push(fruits[tags.integer(0, fruits.length - 1)]);
      }
      return res;
    }
  }
]
```


Feed (Incomplete)

Currently doesn't cover things like brand sponsor, as we intend to deal with that post-prototype.

Possibility: Split this up into multiple requests. Check comments in taggedUsers['data']. Would replace 'data' with the route to make the request, to fire when users try to access data.

```javascript
[
  '{{repeat(5)}}',
  {
    guid: '{{guid()}}',
    user: {
      guid: '{{guid()}}',
      avatar: 'https://randomuser.me/api/portraits/women/{{integer(1, 35)}}.jpg',
      name: '{{firstName()}} {{surname()}}'
    },
    date: 'Today 1:45pm',
    //use int generation here to force new images
    image: 'https://unsplash.it/6{{integer(1, 99)}}',
    content: 'I have the best friends ever!.',
    comments: [
      '{{repeat 0, 5}}',
      {
        guid: '{{guid()}}',
        author: '{{firstName()}} {{surname()}}', 
        body: "..." 
      }
    ],
    taggedUsers: {
        text: "Kelly Saunders, Adam Reeves, and 4 others",
        data: [
          //Idea: Only return API route here to delay loading unless user needs it.
          '{{repeat 0, 7}}',
          { 
            guid: '{{guid()}}',
            name: '{{firstName()}} {{surname()}}'
           }
        ]
    },
    tags: function (tags) {
      var res = [];
      var count = Math.ceil((Math.random() * 10));
      for (var i = 0; i <= count; i++){    
		var fruits = ['Wine', 'Movies', 'Politics', 'Sports', 'Computers', 'Travelling', 'Photography', 'Wordworking', 'Backpacking', 'Cooking', 'Summer', 'Friends'];
		res.push(fruits[tags.integer(0, fruits.length - 1)]);
      }
      return res;
    },
    likes: '{{integer(0, 50)}}'
  }
]
```


The List [07.xx]

```javascript
[
  '{{repeat(8)}}',
  {
    name: function(tags, index){
        return ["Overall", "News", "Sports", "Entertainment", "Technology", "Food", "Health", "Politics"][index]
    },
    guid: '{{guid()}}',
    users: [],
    contributors: [
      '{{repeat(10)}}',
      {
        guid: '{{guid()}}',
        name: '{{firstName()}} {{surname()}}',
		elevateScore: '{{integer(20, 150)}}',
        distance: '{{integer(100, 1000)}}',
        totalFriends: '{{integer(10, 300)}}',
        about: "I'm a curious person interested in making new friends",
        totalFriends: '{{integer(10, 300)}}',
        friend: '{{bool()}}'
      }
    ],
    influencers: [
      '{{repeat(10)}}',
      {
        guid: '{{guid()}}',
        name: '{{firstName()}} {{surname()}}',
		elevateScore: '{{integer(20, 150)}}',
        distance: '{{integer(100, 1000)}}',
        totalFriends: '{{integer(10, 300)}}',
        about: "I'm a curious person interested in making new friends",
        totalFriends: '{{integer(10, 300)}}',
        friend: '{{bool()}}'
      }
    ],
    connectors: [
      '{{repeat(10)}}',
      {
        guid: '{{guid()}}',
        name: '{{firstName()}} {{surname()}}',
		elevateScore: '{{integer(20, 150)}}',
        distance: '{{integer(100, 1000)}}',
        totalFriends: '{{integer(10, 300)}}',
        about: "I'm a curious person interested in making new friends",
        totalFriends: '{{integer(10, 300)}}',
        friend: '{{bool()}}'
      }
    ],
    friends: [],
    elders: [
      '{{repeat(10)}}',
      {
        guid: '{{guid()}}',
        name: '{{firstName()}} {{surname()}}',
		elevateScore: '{{integer(20, 150)}}',
        distance: '{{integer(100, 1000)}}',
        totalFriends: '{{integer(10, 300)}}',
        about: "I'm a curious person interested in making new friends",
        totalFriends: '{{integer(10, 300)}}',
        friend: '{{bool()}}'
      }
    ]
  }
]
```
