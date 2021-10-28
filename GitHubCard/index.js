import axios from 'axios';


function url(){
  axios.get(`https://api.github.com/users/EstrellaDionis`)
  .then(res => {
    console.log(res.data)
    componentCreator(res.data.url, res.data.name, res.data.login, res.data.location, res.data.url, res.data.followers, res.data.following, res.data.bio);
  })
  .catch(error => {
    console.log(error);
  })
}

url();

function componentCreator(image, name, usersname, location, address, followers, following, bio){
  const card = document.createElement('div');
  const img = document.createElement('img');
  const cardInfo = document.createElement('div');
  const nameText = document.createElement('h3');
  const username = document.createElement('p');
  const locationText = document.createElement('p');
  const profile = document.createElement('profile');
  const addressText = document.createElement('a');
  const followersText = document.createElement('p');
  const followingText = document.createElement('p');
  const bioText = document.createElement('p');

  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(nameText);
  cardInfo.appendChild(username);
  cardInfo.appendChild(locationText);
  cardInfo.appendChild(profile);
  profile.appendChild(addressText);
  cardInfo.appendChild(followersText);
  cardInfo.appendChild(followingText);
  cardInfo.appendChild(bioText);

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  nameText.classList.add('name');
  username.classList.add('username');



  img.src = image;
  username.textContent = name;
  nameText.textContent = usersname;
  addressText.href = address;
  addressText.textContent = address;
  followersText.textContent = `Followers: ${followers}`;
  followingText.textContent = `Following: ${following}`;
  bioText.textContent = `Bio: ${bio}`;

  return document.querySelector('.cards').appendChild(card);
}


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
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
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

    Using that array, iterate over it, requesting data for each user, creating a new card for each user, and adding that card to the DOM.
*/

const followersArray = ['MarkRivera', 'tetondan', 'dustinmyers',
'justsml','luishrd'];
followersArray.forEach(user => {
  axios.get(`https://api.github.com/users/${user}`)
  .then(res => {
    componentCreator(res.data.url, res.data.name, res.data.login, res.data.location, res.data.url, res.data.followers, res.data.following, res.data.bio);
  })
  .catch(error => {
    console.log(error);
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

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
