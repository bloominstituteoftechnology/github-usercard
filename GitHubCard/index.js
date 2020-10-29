import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios
  .get('https://api.github.com/users/cmirza')
  .then((response) => {
    const myData = gitHubCard(response.data);
    const card = document.querySelector('.cards');
    card.appendChild(myData);
    console.log(response);
    
  })
  .catch((error) => {
    console.log(error);
  });

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

function gitHubCard (data) {
  //build card
  const card = document.createElement('div');
  card.classList.add('card');

  //build image
  const img = document.createElement('img');
  card.appendChild(img);
  img.setAttribute('src', data.avatar_url);

  //build card info
  const subDiv = document.createElement('div');
  card.appendChild(subDiv);
  subDiv.ClassName = 'card-info';

  //build name
  const name = document.createElement('h3');
  subDiv.appendChild(name);
  name.className = 'name';
  name.textContent = `Name: ${data.name}`;

  //build username
  const userName = document.createElement('p')
  userName.className = 'username';
  subDiv.appendChild(userName);
  userName.textContent = `Username: ${data.login}`;

  //build location
  const location = document.createElement('p');
  subDiv.appendChild(location);
  location.textContent = `Location: ${data.location}`;

  //build profile
  const profile = document.createElement('p');
  subDiv.appendChild(profile);
  profile.textContent = `Profile: `;

  //build profile link
  const profileLink = document.createElement('a');
  profile.appendChild(profileLink);
  profileLink.setAttribute('href', data.url);
  profileLink.textContent = data.url;

  //build follwers
  const followers = document.createElement('p');
  subDiv.appendChild(followers);
  followers.textContent = `Followers: ${data.followers}`;

  //build following
  const following = document.createElement('p');
  subDiv.appendChild(following);
  following.textContent = `Following: ${data.following}`;

  //build bio
  const bio = document.createElement('p');
  subDiv.appendChild(bio);
  bio.textContent = `Bio: ${data.bio}`;

  return card;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
