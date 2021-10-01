/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

import axios from 'axios';
var myGit = {};

const grabTheData = function (URL) {
  axios.get(URL)
    .then (res => {
       const gitObj = {  

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
          name: res.data.name,
          username: res.data.login, 
          img: res.data.avatar_url,
          url: res.data.html_url,
          location: res.data.location, 
          followers: res.data.followers,
          following: res.data.following,
          bio: res.data.bio
        }   

        const gitCard = gitCardMaker(gitObj);
        document.querySelector('.cards').appendChild(gitCard);                   
    })
    .catch(err => console.error(err))
    .finally(() => console.log("I DON'T CARE IF IT WORKED OR NOT!!!")); 
    // post() patch() delete()     
};

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
    'tetondan',
    'dustinmyers',
    'justsml',
    'luishrd',
    'bigknell'
];

let urlArr = [];
for (let i = 0; i < followersArray.length; i++) {
    urlArr.push(`https://api.github.com/users/${followersArray[i]}`);    
}

// urlArr.forEach(item => grabTheData(item));

urlArr.map(item => grabTheData(item));

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

function gitCardMaker (gitObj) {

  // instantiating the elements
  const card = document.createElement('div');
  const image = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const url = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  // setting class names, attributes and text
  bio.textContent = `Bio: ${gitObj.bio}`;
  following.textContent = `Following: ${gitObj.following}`;
  followers.textContent = `Followers: ${gitObj.followers}`;
  url.href = gitObj.url;
  url.textContent = gitObj.url;
  profile.textContent = `Profile: `
  profile.appendChild(url);
  location.textContent = gitObj.location;
  userName.textContent =gitObj.username;
  userName.classList.add('username');
  name.textContent = gitObj.name;
  name.classList.add('name');
  image.src = gitObj.img;
  card.classList.add('card');
  card.appendChild(image);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.classList.add('card-info')
  // cardInfo.appendChild(userName);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  return card;
}

const myURL = 'https://api.github.com/users/beatlesm';

// grabTheData(myURL);

/* document.addEventListener('click', grabTheData(URL) => {

}); */

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
