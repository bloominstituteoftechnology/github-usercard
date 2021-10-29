import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const cards = document.querySelector('.cards');

axios.get('https://api.github.com/users/areccus')
.then(res =>{
  cards.appendChild(cardMaker(res.data));
  console.log(res)
})
.catch(err => {
  console.error('error');
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

function cardMaker(avatar_url, name, login, location, html_url, followers, following, bio) {

  const cardDiv = document.createElement('div');
  const profileImg = document.createElement('img');
  const infoDiv = document.createElement('div');
  const userH3 = document.createElement('h3');
  const userP = document.createElement('p');
  const locationP = document.createElement('p');
  const profileP = document.createElement('p');
  const profileLink = document.createElement('a');
  const followersP = document.createElement('p');
  const followingP = document.createElement('p');
  const bioP = document.createElement('p');

  cardDiv.classList.add('card');
  infoDiv.classList.add('card-info');
  userH3.classList.add('name');
  userP.classList.add('username');

  cardDiv.appendChild(profileImg);
  cardDiv.appendChild(infoDiv);
  infoDiv.appendChild(userH3);
  infoDiv.appendChild(userP);
  infoDiv.appendChild(locationP);
  infoDiv.appendChild(profileP);
  profileP.appendChild(profileLink);
  infoDiv.appendChild(followersP);
  infoDiv.appendChild(followingP);
  infoDiv.appendChild(bioP);

  profileImg.src = avatar_url;
  userH3.textContent = name;
  userP.textContent = login;
  locationP.textContent = `location: ${location}`;
  profileP.textContent = `Profile: `
  profileLink.textContent = html_url;
  followersP.textContent = `Followers: ${followers}`;
  followingP.textContent = `Following: ${following}`;
  bioP.textContent = `bio: ${bio}`;

  return cardDiv;
}

const followersArr = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArr.map(item => {
  axios.get('https://api.github.com/users/${item}')
  .then(res => {
    console.log(res)
    const respData = res.data
    cards.appendChild(cardMaker(respData))
  })
  .catch(err => {
    console.error('error');
  })
})

console.log(cardMaker('https://api.github.com/users/areccus>'))