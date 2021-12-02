
import axios from 'axios'
/*
  (COMPLETED) STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*function getMe(name) {
  axios.get(`https://api.github.com/users/${name}`)
}
getMe(brandib222);*/

/*
  (COMPLETED) STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    (COMPLETED)Skip to STEP 3 (line 34).
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:*/

function userMaker(userObj) {

  const card = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const pageAddress = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  card.appendChild(cardImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(pageAddress);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');

  cardImg.src = userObj.avatar_url;
  name.textContent = userObj.name;
  username.textContent = userObj.login;
  location.textContent = userObj.location;
  profile.href = userObj.url;
  profile.textContent = userObj.html_url;
  followers.textContent = `Followers: ${userObj.followers}`;
  following.textContent = `Following: ${userObj.following}`;
  bio.textContent = userObj.bio;

  const entryPoint = document.querySelector('.cards');
  entryPoint.appendChild(card);

  return card;

}

// END OF USER MAKER FUNCTION

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

function getUsers (username) {
  axios.get(`https://api.github.com/users/${username}`)
    .then(resp => {
// CONSOLE.LOG(RESP) TO MAKE SURE YOU NEED 'DATA' AND NOT SOMETHING ELSE
      userMaker(resp.data)
    }).catch(error => {
      console.error(error);
    })
}
getUsers('dustinmyers');
getUsers('brandib222');



  /*  <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{user's name}</h3>
        <p class="username">{users username}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

/* const testUser = {
  "login": "brandib222",
  "id": 91443920,
  "node_id": "MDQ6VXNlcjkxNDQzOTIw",
  "avatar_url": "https://avatars.githubusercontent.com/u/91443920?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/brandib222",
  "html_url": "https://github.com/brandib222",
  "followers_url": "https://api.github.com/users/brandib222/followers",
  "following_url": "https://api.github.com/users/brandib222/following{/other_user}",
  "gists_url": "https://api.github.com/users/brandib222/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/brandib222/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/brandib222/subscriptions",
  "organizations_url": "https://api.github.com/users/brandib222/orgs",
  "repos_url": "https://api.github.com/users/brandib222/repos",
  "events_url": "https://api.github.com/users/brandib222/events{/privacy}",
  "received_events_url": "https://api.github.com/users/brandib222/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Brandi Ball",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 39,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2021-09-27T02:20:41Z",
  "updated_at": "2021-09-30T22:19:45Z"
  }

  console.log(userMaker(testUser)); */