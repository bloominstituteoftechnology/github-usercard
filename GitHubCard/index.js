/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios';

const result = axios.get("https://api.github.com/users/joshualevan");
 result.then(res =>).catch(err =>)

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/
// httpie.org => $ http https://api.github.com/users/joshualevan --verbose
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

const gitMaker({ "avatar_url", "name", "login", "location", "html_url", "followers", "following", "bio" }){
  const cardDiv = document.createElement('div');
  const userImg = document.createElement('img');
  const cardInfoDiv = document.createElement('div');
  const nameH3 = document.createElement('h3');
  const userNameP = document.createElement('p');
  const locationP = document.createElement('p');
  const profileP = document.createElement('p');
  const githubLink = document.createElement('a');
  const followersP = document.createElement('p');
  const followingP = document.createElement('p');
  const bioP = document.createElement('p');
  //append to parents
  cardDiv.appendChild(userImg);
  cardDiv.appendChild(cardInfoDiv);
  cardInfoDiv.appendChild(nameH3);
  cardInfoDiv.appendChild(userNameP);
  cardInfoDiv.appendChild(locationP);
  cardInfoDiv.appendChild(profileP);
  cardInfoDiv.appendChild(githubLink);
  cardInfoDiv.appendChild(followersP);
  cardInfoDiv.appendChild(followingP);
  cardInfoDiv.appendChild(bioP);
  //add classes and hrefs
  cardDiv.classList.add('card');
  cardInfoDiv.classList.add('card-info');
  nameH3.classList.add('name');
  userNameP.classList.add('username');
  githubLink.href = { "html_url"};
  //add textContent and srcs
  userImg.src = { "avatar_url"};
  nameH3.textContent = { "name" };
  userNameP.textContent = { "login" };
  locationP.textContent = { "location" };
  profileP.innerHTML = `Profile: ${githubLink}`;
  followersP.textContent = { "followers" };
  followingP.textContent = { "following" };
  bioP.textContent = { "bio" };
  //^ GO BACK TO STEP 4!!!!
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
