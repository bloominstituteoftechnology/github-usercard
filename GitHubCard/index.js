import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/jesswillcode')
.then(resp => {
  console.log(resp);
}).catch(error => {
  console.error(error);
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

//resp.data.avatarURL, resp.data.name, resp.data.login, resp.data.location, resp.data.profile, resp.data.followers, resp.data.following, resp.data.bio

function cardMaker(card) {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');

  const avatar = document.createElement('img');
  avatar.src = card.data.avatarURL;
  avatar.appendChild(cardDiv);

  const cardInfDiv = document.createElement('div');
  cardInfDiv.classList.add('card-info');
  cardInfDiv.appendChild('cardDiv');

  const nameHead = document.createElement('h3');
  nameHead.classList.add('name');
  nameHead.textContent = card.data.name;
  nameHead.appendChild(cardInfDiv);

  const userNamePara = document.createElement('p');
  userNamePara.classList.add('username');
  userNamePara.textContent = card.data.login;
  userNamePara.appendChild(cardInfDiv);

  const locationPara = document.createElement('p');
  locationPara.textContent = `Location: ${card.data.location}`;
  locationPara.appendChild(cardInfDiv);

  const profilePara = document.createElement('p');
  profilePara.textContent = `Profile: ${profileLink}`;
  profilePara.appendChild(cardInfDiv);

  const profileLink = document.createElement('a');
  profileLink.href = card.data.profile;
  profileLink.appendChild(profilePara);

  const followersPara = document.createElement('p');
  followersPara.textContent = `Followers: ${card.data.followers}`;
  followersPara.appendChild(cardInfDiv);

  const followingPara = document.createElement('p');
  followingPara.textContent = `Following: ${card.data.following}`;
  followingPara.appendChild(cardInfDiv);

  const bioPara = document.createElement('p');
  bioPara.textContent = `Bio: ${card.data.bio}`;
  bioPara.appendChild(cardInfDiv);

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
