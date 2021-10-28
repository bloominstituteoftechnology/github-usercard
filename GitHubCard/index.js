const { default: axios } = require("axios");

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios'
axios.get('https://api.github.com/users/Tuan147')
.then(res => { 
  const cardData = usercardMaker(res.data)
})
.catch(err => console.error(err))


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
const myCard = document.querySelector('.cards');

function usercardMaker ({ avatar_url, name, login, location, html_url, followers, following, bio}){


  const card = document.createElement('div');
  const avt = document.createElement('img');
  const cardInfo = document.createElement('div');
  const realName = document.createElement('h3');
  const userName = document.createElement('p');
  const userLocation = document.createElement('p');
  const userProfile = document.createElement('p');
  const userGitLink = document.createElement('a');
  const userFollowers = document.createElement('p');
  const userFollowing = document.createElement('p');
  const userBio = document.createElement('p');
  
  card.appendChild(avt);
  card.appendChild(cardInfo);
  card.appendChild(realName);
  card.appendChild(userName);
  card.appendChild(userLocation);
  card.appendChild(userProfile);
  card.appendChild(userGitLink);
  card.appendChild(userFollowers);
  card.appendChild(userFollowing);
  card.appendChild(userBio);

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  realName.classList.add('name');
  userName.classList.add('username');
  avt.src = avatar_url;
  realName.textContent = `${name}`;
  userName.textContent = `${login}`;
  userLocation.textContent = `Location: ${location}`;
  userProfile.textContent = `Profile: `;
  userGitLink.setAttribute('href', `${html_url}`);
  userProfile.appendChild(userGitLink);
  userFollowers.textContent.add(`Followers: ${followers}`);
  userFollowing.textContent.add(`Following: ${following}`);
  userBio.textContent.add(`Bio: ${bio}`);

  return card;
  
  }



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

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
