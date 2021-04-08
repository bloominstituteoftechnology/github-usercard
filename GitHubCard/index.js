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

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

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

const Axios = require('axios').default;

function Request(user) {

  Axios.get(`https://api.github.com/users/${user}`).then((Response) => {

    const cards = document.querySelector('.cards');

    cards.appendChild(Profile(Response.data));

  });

}

Request('Hugo-Orozco');

followersArray.forEach((user) => {

  Request(user);

});

function Element() {

  return {
    div: () => {
      return document.createElement('div');
    },
    img: () => {
      return document.createElement('img');
    },
    h3: () => {
      return document.createElement('h3');
    },
    p: () => {
      return document.createElement('p');
    },
    a: () => {
      return document.createElement('a');
    }
  };

}

function Profile(data) {

  const card = Element().div();
  card.className = 'card';

  const image = Element().img();
  image.src = data.avatar_url;

  const cardInfo = Element().div();
  cardInfo.className = 'card-info';

  const name = Element().h3();
  name.className = 'name';
  name.textContent = data.name ?? '\u200B';

  const username = Element().p();
  username.className = 'username';
  username.textContent = data.login;

  const location = Element().p();
  location.textContent = `Location: ${data.location ?? '\u200B'}`;

  const address = Element().a();
  address.href = data.html_url;
  address.textContent = data.html_url;
  const profile = Element().p();
  profile.textContent = `Profile: ${address}`;

  const followers = Element().p();
  followers.textContent = `Followers: ${data.followers}`;

  const following = Element().p();
  following.textContent = `Following: ${data.following}`;

  const bio = Element().p();
  bio.textContent = `Bio: ${data.bio ?? '\u200B'}`;

  card.appendChild(image);
  card.appendChild(cardInfo);

  cardInfo.appendChild(name);
  cardInfo.append(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  return card;

}
