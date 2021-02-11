import axios from 'axios';

// axios.get('https://api.github.com/users/alexismarroquin7')
//   .then(response => {
//     console.log(response)
//   })
//   .catch(err => {
//     console.log(err, 'An error occured.')
//   })




/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

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
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];

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

function cardMaker(username){
  axios.get(`https://api.github.com/users/${username}`)
    .then(response => {
      // console.log(response.data.avatar_url)
      // console.log(response.data.name)
      // console.log(response.data.login)
      // console.log(response.data.location)
      // console.log(response.data.html_url)
      // console.log(response.data.followers)
      // console.log(response.data.following)
      // console.log(response.data.bio)
      console.log(response);
      makeCard(response);

    })
    .catch(err => {
      console.log(err, 'An error occurred.');
    })
}

function makeCard(response){
  const avatar_URL = response.data.avatar_url;
  const nameStr = response.data.name;
  const login = response.data.login;
  const location = response.data.location;
  const githubURL = response.data.html_url;
  const followers = response.data.followers;
  const following = response.data.following;
  const bio = response.data.bio;

  const card = document.createElement('div');
  const img = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const usernameP = document.createElement('p');
  const locationP = document.createElement('p');
  const profile = document.createElement('p');
  const profileATag = document.createElement('a');
  const myFollowers = document.createElement('p');
  const myFollowing = document.createElement('p');
  const myBio = document.createElement('p');

  card.classList.add('card');
  img.setAttribute('src', avatar_URL);
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  usernameP.classList.add('username');
  profileATag.setAttribute('href', githubURL)

  name.textContent = nameStr;
  usernameP.textContent = login;
  locationP.textContent = `Location: ${location}`;
  profile.textContent = `Profile:\n`;
  profileATag.textContent = githubURL;
  myFollowers.textContent = `Followers: ${followers}`;
  myFollowing.textContent = `Following: ${following}`;
  myBio.textContent = `Bio: ${bio}`;

  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(usernameP);
  cardInfo.appendChild(locationP);
  cardInfo.appendChild(profile);
  profile.appendChild(profileATag);
  cardInfo.appendChild(myFollowers);
  cardInfo.appendChild(myFollowing);
  cardInfo.appendChild(myBio);

  // console.log(card);
  const cards = document.querySelector('.cards');
  console.log(cards);
  cards.appendChild(card);
}

cardMaker('alexismarroquin7');

followersArray.forEach(item => {
  cardMaker(item);
});

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
