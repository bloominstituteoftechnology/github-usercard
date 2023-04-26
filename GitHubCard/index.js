import axios from 'axios';
import 'regenerator-runtime/runtime.js';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/omaddoc
*/

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

const data = axios
  .get('https://api.github.com/users/omaddoc')
  .then((res) => {
    return res.data;
  })
  .catch((err) => {
    console.log(err);
  });

const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell',
];

function cardCreator(user) {
  const card = document.createElement('div');
  const info = document.createElement('div');
  const img = document.createElement('img');
  const username = document.createElement('p');
  const profile = document.createElement('p');
  const name = document.createElement('h3');
  const location = document.createElement('p');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');
  const address = document.createElement('a');

  img.src = user.avatar_url;
  name.textContent = user.name;
  username.textContent = user.login;
  location.textContent = `Location: ${user.location}`;
  followers.textContent = `Followers: ${user.followers}`;
  following.textContent = `Following: ${user.following}`;
  bio.textContent = `Bio: ${user.bio}`;

  address.href = user.html_url;
  address.textContent = user.html_url;
  profile.textContent = 'Profile: ';
  profile.appendChild(address);

  card.classList.add('card');
  info.classList.add('card-info');
  username.classList.add('username');
  if (user.login === 'omaddoc') {
    info.append(name, username, location, profile, followers, following, bio);
    card.append(img, info);
  } else {
    info.append(username, profile);
    card.append(img, info);
  }

  return card;
}

async function fetchData() {
  try {
    const res = await axios.get('https://api.github.com/users/omaddoc');
    const data = res.data;
    cards.appendChild(cardCreator(data));
  } catch (err) {
    console.log(err);
  }
}

async function fetchFollowers() {
  try {
    const res = await axios.get(
      `https://api.github.com/users/omaddoc/followers`
    );
    const data = res.data;
    console.log(data);

    const followersCardsPromises = data.map(async (user) => {
      return cardCreator(user);
    });

    const followersCards = await Promise.all(followersCardsPromises);

    // Append the followers' cards to the DOM
    followersCards.forEach((card) => {
      cards.appendChild(card);
    });
  } catch (err) {
    console.log(err);
  }
}

const cards = document.querySelector('.cards');

async function fetchDataAndFollowers() {
  await fetchData();
  await fetchFollowers();
}

fetchDataAndFollowers();

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
