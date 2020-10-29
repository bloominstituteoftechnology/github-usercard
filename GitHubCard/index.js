/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>  
*/
import axios from "axios";

const data = {};
//consider calling axios again, one level deeper, res.data from followers, use map to append each item
axios
  .get("https://api.github.com/users/sebastian-espeset")
  .then(res => {
    console.log(res.data);
    parentContainer.appendChild(cardMaker(res.data));
    
  })
  .catch(err => {
    console.log("error, fetch failed ",err);
  })
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function
//Github api data looks like;

// data:
avatar_url: "https://avatars1.githubusercontent.com/u/72098066?v=4"
bio: "Emerging web developer enrolled at Lambda School"
blog: ""
company: null
created_at: "2020-09-29T17:31:53Z"
email: null
events_url: "https://api.github.com/users/sebastian-espeset/events{/privacy}"
followers: 0
followers_url: "https://api.github.com/users/sebastian-espeset/followers"
following: 0
following_url: "https://api.github.com/users/sebastian-espeset/following{/other_user}"
gists_url: "https://api.github.com/users/sebastian-espeset/gists{/gist_id}"
gravatar_id: ""
hireable: null
html_url: "https://github.com/sebastian-espeset"
id: 72098066
location: "Chicago, IL"
login: "sebastian-espeset"
name: "Sebastian"
node_id: "MDQ6VXNlcjcyMDk4MDY2"
organizations_url: "https://api.github.com/users/sebastian-espeset/orgs"
public_gists: 0
public_repos: 20
received_events_url: "https://api.github.com/users/sebastian-espeset/received_events"
repos_url: "https://api.github.com/users/sebastian-espeset/repos"
site_admin: false
starred_url: "https://api.github.com/users/sebastian-espeset/starred{/owner}{/repo}"
subscriptions_url: "https://api.github.com/users/sebastian-espeset/subscriptions"
twitter_username: "Seba_Espeset"
type: "User"
updated_at: "2020-10-20T17:55:39Z"
url: "https://api.github.com/users/sebastian-espeset"

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
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
//Parent to be appended

const parentContainer = document.querySelector(".cards");

//Card creator function
function cardMaker(data){
  //Creating elements  
    const tempCard = document.createElement('div');
    const cardImage = document.createElement('img');
    const cardInfo = document.createElement('div');
    const cardName = document.createElement('h3');
    const cardUsername = document.createElement('p');
    const cardLocation = document.createElement('p');
    const cardProfile = document.createElement('p');
    const profileLink = document.createElement('a');
    const followerCount = document.createElement('p');
    const followingCount = document.createElement('p');
    const cardBio = document.createElement('p');
  //adding content to elements
    cardImage.src=data.avatar_url;
    cardName.textContent=data.name;
    cardUsername.textContent=data.login;
    cardLocation.textContent=data.location;
    cardProfile.textContent='Profile: ';
    profileLink.href=data.url;
    followerCount.textContent=`Followers: ${data.followers}`;
    followingCount.textContent=`Following: ${data.following}`;
    cardBio.textContent=`Bio: ${data.bio}`;
  //Appending elements
    tempCard.appendChild(cardImage);
    tempCard.appendChild(cardInfo);
    cardInfo.appendChild(cardName);
    cardInfo.appendChild(cardUsername);
    cardInfo.appendChild(cardLocation);
    cardInfo.appendChild(cardProfile);
    cardProfile.appendChild(profileLink);
    cardInfo.appendChild(followerCount);
    cardInfo.appendChild(followingCount);
    cardInfo.appendChild(cardBio);
  //returning card
  return tempCard;
}

//Time to use forEach to add this markup to the DOM
const test = cardMaker(data);
console.log(test);

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:
  
    <div class="card">x
      <img src={image url of user} />x
      <div class="card-info">x
        <h3 class="name">{users name}</h3>x
        <p class="username">{users user name}</p>x
        <p>Location: {users location}</p>x
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
