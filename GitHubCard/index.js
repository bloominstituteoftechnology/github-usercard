/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const cardsDiv = document.querySelector('.cards');

axios.get('https://api.github.com/users/jfox16')
.then(result => {
  cardsDiv.appendChild(createCard(result.data));
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

const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];

followersArray.forEach(follower => {
  axios.get(`https://api.github.com/users/${follower}`)
  .then(result => {
    cardsDiv.appendChild(createCard(result.data));
  });
});

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

function createCard(userData) {

  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');

  const userImg = document.createElement('img');
  userImg.setAttribute('src', userData.avatar_url);
  cardDiv.appendChild(userImg);

  const infoDiv = document.createElement('div');
  cardDiv.appendChild(infoDiv);

  const name = document.createElement('h3');
  name.classList.add('name');
  name.textContent = userData.name;
  infoDiv.appendChild(name);

  const username = document.createElement('p');
  username.classList.add('username');
  username.textContent = userData.login;
  infoDiv.appendChild(username);

  const location = document.createElement('p');
  location.textContent = `Location: ${userData.location}`;
  infoDiv.appendChild(location);

  const profileLink = document.createElement('p');
  profileLink.innerHTML = `Profile: <a href=${userData.html_url}>${userData.html_url}</a>`;
  infoDiv.appendChild(profileLink);

  const followers = document.createElement('p');
  followers.textContent = `Followers: ${userData.followers}`;
  infoDiv.appendChild(followers);

  const following = document.createElement('p');
  following.textContent = `Followers: ${userData.following}`;
  infoDiv.appendChild(following);

  const bio = document.createElement('p');
  bio.textContent = `Bio: ${userData.bio}`;
  infoDiv.appendChild(bio);

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
