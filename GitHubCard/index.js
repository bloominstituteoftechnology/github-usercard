/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const myApi = axios.get('https://api.github.com/users/Abraman18');
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
import axios from 'axios';
// const newCard = cardCreator(myApi);
// document.querySelector('.cards').appendChild(newCard);

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['JustinBieber','Drake','Khalid', 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];
followersArray.forEach(follower=>{ 
  axios.get(`https://api.github.com/users/${follower}`) 
 
 
 
  .then(info=>{ 
  const cards = document.querySelector('.cards') 
  cards.appendChild(cardCreator(info.data)) 
  }) 
 
 
 
  .catch(error=>{ 
   console.log(error) 
  }) 
  }) 
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
function cardCreator(profile) {
  // New Elements
  const card = document.createElement('div');
  const cardImg = document.createElement('img');   // cardImg = img
  const cardInfo = document.createElement('div');
  const h3Name = document.createElement('h3');
  const username = document.createElement('p');
  const userLocation = document.createElement('p');
  const profileP = document.createElement('p');
  const aTag = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  // Appending
  card.appendChild(cardImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(h3Name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(profileP);
  profileP.appendChild(aTag);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

// Adding Classes

  card.classList.add('card');  // card = DIV
  cardInfo.classList.add('card-info'); // cardInfo = div
  h3Name.classList.add('name'); //h3Name = h3
  username.classList.add('username');

// Updating Text
  h3Name.textContent = profile.name;
  userLocation.textContent = profile.location;
  profileP.textContent = `Profile: ${ profile.url }`;
  followers.textContent = `Followers: ${profile.followers}`;
  following.textContent = `Following: ${profile.following}`;
  bio.textContent = `Bio: ${profile.bio}`;

  // Adding Links
  cardImg.src = profile['avatar_url'];
  aTag.href = profile.html_url;

  return card;
};


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
