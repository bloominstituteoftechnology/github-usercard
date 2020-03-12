// import { object } from "prop-types";

/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/



/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  {
    "login": "nataliastewart",
    "id": 60708462,
    "node_id": "MDQ6VXNlcjYwNzA4NDYy",
    "avatar_url": "https://avatars2.githubusercontent.com/u/60708462?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/nataliastewart",
    "html_url": "https://github.com/nataliastewart",
    "followers_url": "https://api.github.com/users/nataliastewart/followers",
    "following_url": "https://api.github.com/users/nataliastewart/following{/other_user}",
    "gists_url": "https://api.github.com/users/nataliastewart/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/nataliastewart/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/nataliastewart/subscriptions",
    "organizations_url": "https://api.github.com/users/nataliastewart/orgs",
    "repos_url": "https://api.github.com/users/nataliastewart/repos",
    "events_url": "https://api.github.com/users/nataliastewart/events{/privacy}",
    "received_events_url": "https://api.github.com/users/nataliastewart/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "gabeaster",
    "id": 59710235,
    "node_id": "MDQ6VXNlcjU5NzEwMjM1",
    "avatar_url": "https://avatars0.githubusercontent.com/u/59710235?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/gabeaster",
    "html_url": "https://github.com/gabeaster",
    "followers_url": "https://api.github.com/users/gabeaster/followers",
    "following_url": "https://api.github.com/users/gabeaster/following{/other_user}",
    "gists_url": "https://api.github.com/users/gabeaster/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/gabeaster/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/gabeaster/subscriptions",
    "organizations_url": "https://api.github.com/users/gabeaster/orgs",
    "repos_url": "https://api.github.com/users/gabeaster/repos",
    "events_url": "https://api.github.com/users/gabeaster/events{/privacy}",
    "received_events_url": "https://api.github.com/users/gabeaster/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "janecyyu",
    "id": 42662833,
    "node_id": "MDQ6VXNlcjQyNjYyODMz",
    "avatar_url": "https://avatars3.githubusercontent.com/u/42662833?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/janecyyu",
    "html_url": "https://github.com/janecyyu",
    "followers_url": "https://api.github.com/users/janecyyu/followers",
    "following_url": "https://api.github.com/users/janecyyu/following{/other_user}",
    "gists_url": "https://api.github.com/users/janecyyu/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/janecyyu/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/janecyyu/subscriptions",
    "organizations_url": "https://api.github.com/users/janecyyu/orgs",
    "repos_url": "https://api.github.com/users/janecyyu/repos",
    "events_url": "https://api.github.com/users/janecyyu/events{/privacy}",
    "received_events_url": "https://api.github.com/users/janecyyu/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "devjaymoe",
    "id": 60631192,
    "node_id": "MDQ6VXNlcjYwNjMxMTky",
    "avatar_url": "https://avatars0.githubusercontent.com/u/60631192?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/devjaymoe",
    "html_url": "https://github.com/devjaymoe",
    "followers_url": "https://api.github.com/users/devjaymoe/followers",
    "following_url": "https://api.github.com/users/devjaymoe/following{/other_user}",
    "gists_url": "https://api.github.com/users/devjaymoe/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/devjaymoe/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/devjaymoe/subscriptions",
    "organizations_url": "https://api.github.com/users/devjaymoe/orgs",
    "repos_url": "https://api.github.com/users/devjaymoe/repos",
    "events_url": "https://api.github.com/users/devjaymoe/events{/privacy}",
    "received_events_url": "https://api.github.com/users/devjaymoe/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "Diddleslip",
    "id": 52723004,
    "node_id": "MDQ6VXNlcjUyNzIzMDA0",
    "avatar_url": "https://avatars1.githubusercontent.com/u/52723004?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Diddleslip",
    "html_url": "https://github.com/Diddleslip",
    "followers_url": "https://api.github.com/users/Diddleslip/followers",
    "following_url": "https://api.github.com/users/Diddleslip/following{/other_user}",
    "gists_url": "https://api.github.com/users/Diddleslip/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Diddleslip/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Diddleslip/subscriptions",
    "organizations_url": "https://api.github.com/users/Diddleslip/orgs",
    "repos_url": "https://api.github.com/users/Diddleslip/repos",
    "events_url": "https://api.github.com/users/Diddleslip/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Diddleslip/received_events",
    "type": "User",
    "site_admin": false
  },
];

function gitHubCard(obj){
  const cardHolder = document.createElement("div"),
        img = document.createElement("img"),
        cardInfo = document.createElement("div"),
        nameInfo = document.createElement("h3"),
        userName = document.createElement("p"),
        locationInfo = document.createElement("p"),
        profileInfo = document.createElement("p"),
        linkTag = document.createElement("a"),
        followerInfo = document.createElement("p"),
        followingInfo = document.createElement("p"),
        bioInfo = document.createElement("p");

  cardHolder.classList.add("card");
  cardInfo.classList.add("card-info");
  nameInfo.classList.add("name");
  userName.classList.add("username");

  img.src = {obj.data.avatar_url};
  nameInfo.textContent = obj.data.name;
  userName.textContent = obj.data.login;
  locationInfo.textContent = `Location: ${obj.data.location}`;
  profileInfo.textContent = `Profile:`;
  linkTag.textContent = obj.data.html_url;
  followerInfo.textContent = `Follower: ${obj.data.followers}`;
  followingInfo.textContent = `Following: ${obj.data.following}`;
  bioInfo.textContent = `Bio: ${obj.data.bio}`;
  
  cardHolder.append(img, cardInfo);
  cardInfo.append(nameInfo, userName, locationInfo, profileInfo, followerInfo, followingInfo, bioInfo);
  profileInfo.append(linkTag);

  
 return cardHolder 
}

parentTag = document.querySelector(".cards")

axios.get('https://api.github.com/users/joowoonk')
  .then(response => {
    parentTag.append(gitHubCard(response));
    console.log(response)
  })
  .catch(error => {
    console.log("the data was not returned", error);
  })

  followersArray.forEach(x=>
    parentTag.append(gitHubCard(x)))
//

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
