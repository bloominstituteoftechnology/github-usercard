import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const followersArray = ['jesswillcode', 'dbvker', 'DatBoiLuiskrrt', 'gumsanmarip', 'magoha01', 'tvolchko'];
const cardsEntry = document.querySelector('.cards');

for(let i = 0; i < followersArray.length; i++){
  getUserCard(followersArray[i]);
}

function getUserCard(username){
axios.get(`https://api.github.com/users/${username}`)
.then(resp => {
  const gitUser = cardMaker(resp.data);
  cardsEntry.appendChild(gitUser);
}).catch(error => {
  console.error(error);
})
}
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

function cardMaker(card) {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');

  const avatar = document.createElement('img');
  avatar.src = card.avatar_url;
  cardDiv.appendChild(avatar);

  const cardInfDiv = document.createElement('div');
  cardInfDiv.classList.add('card-info');
  cardDiv.appendChild(cardInfDiv);

  const nameHead = document.createElement('h3');
  nameHead.classList.add('name');
  nameHead.textContent = card.name;
  cardInfDiv.appendChild(nameHead);

  const userNamePara = document.createElement('p');
  userNamePara.classList.add('username');
  userNamePara.textContent = card.login;
  cardInfDiv.appendChild(userNamePara);

  const locationPara = document.createElement('p');
  locationPara.textContent = `Location: ${card.location}`;
  cardInfDiv.appendChild(locationPara);

  const profilePara = document.createElement('p');
  cardInfDiv.appendChild(profilePara);

  const profileLink = document.createElement('a');
  profileLink.href = card.html_url;
  profilePara.textContent = `Profile: ${profileLink}`;
  profilePara.appendChild(profileLink);

  const followersPara = document.createElement('p');
  followersPara.textContent = `Followers: ${card.followers}`;
  cardInfDiv.appendChild(followersPara);

  const followingPara = document.createElement('p');
  followingPara.textContent = `Following: ${card.following}`;
  cardInfDiv.appendChild(followingPara);

  const bioPara = document.createElement('p');
  bioPara.textContent = `Bio: ${card.bio}`;
  cardInfDiv.appendChild(bioPara);

  return cardDiv;
}