const { default: axios } = require("axios");

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
  // import axios from 'axios';
  const entryPoint= document.querySelector('.card');

  axios.get('https://api.github.com/users/justinpeisker')
  .then(resp => {
    console.log(resp);
    
    const newCardObj = {
      img: resp.data.avatar_url,
      name: resp.data.name,
      username: resp.data.login,
      location: resp.data.location,
      // profile: resp.data.
      followers: resp.data.followers,
      following: resp.data.following,
      bio: resp.data.bio
    };
    const newCard = cardMaker(newCardObj);
    entryPoint.appendChild(newCard);
  })  .catch(err => {
    console.error(err);
  })
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
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

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
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


function cardMaker({img, name, username, location, profile, followers, following, bio}) {

  const cardDiv = document.createElement('div');
  const img = document.createElement('img');
  const cardInfoDiv = document.createElement('div');
  const name = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = docuemnt.createElement('p');
  const href = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  cardDiv.appendChild(img);
  cardDiv.appendChild(cardInfoDiv);
  cardInfoDiv.appendChild(name);
  cardInfoDiv.appendChild(username);
  cardInfoDiv.appendChild(location);
  cardInfoDiv.appendChild(profile);
  profile.appendChild(href);
  cardInfoDiv.appendChild(followers);
  cardInfoDiv.appendChild(following);
  cardInfoDiv.appendChild(bio);

  cardDiv.className = 'card';
  cardInfoDiv.className = 'card-info';
  name.className = 'name';
  username.className = 'username';

  img.src = avatar_url;
  name.textContent = name;
  username.textContent = login;
  location.textContent = `location: ${location}`;
  profile.textContent = `Profile: ${profile}`;
  followers.textContent = `Followers: ${followers}`;
  following.textContent = `Following: ${following}`;
  bio.textContent = `Bio: ${bio}`;


  return cardDiv;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
