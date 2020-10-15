// const axios = require("axios");
import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
// const URL = "https://api.github.com/users/DanielleKoduru";
axios.get("https://api.github.com/users/DanielleKoduru")
  .then((res) => {
    const info = res.data;
    const cardClass = document.querySelector('.cards');
    const maker = cardMaker(info);
    cardClass.appendChild(maker);
    console.log(cardClass);
  })
// .catch((err) => {
//   console.log("error", err);
// });
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

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

const followersArray = [
  "https://github.com/dterran2",
  "https://github.com/clarejackson",
  "https://api.github.com/users/barbaralois",
  "https://api.github.com/users/somersgreg",
  "https://api.github.com/users/ViridityMoon"
];

followersArray.forEach(follower => {
  axios.get(`${follower}`)
    .then(res => {
      const card = cardMaker(res.data);
      const cardClass = document.querySelector('.cards');
      cardClass.apphendChild(card);
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
const cardMaker = (data) => {
  const cardDiv = document.createElement('div');
  const picture = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const href = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  cardDiv.classList.add('card');
  picture.setAttribute('src', data.avatar_url);
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  name.textContent = data.name;
  username.classList.add('username');
  username.textContent = data.login;
  location.textContent = `Location: ${data.location}`;
  profile.textContent = `Profile: ${data.url}`;
  href.setAttribute('href', data.url);
  followers.textContent = `Followers: ${data.followers}`;
  following.textContent = `Following: ${data.following}`;
  bio.textContent = `Bio ${data.bio}`;

  cardDiv.appendChild(picture);
  cardDiv.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(href);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  return cardDiv;
};

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
