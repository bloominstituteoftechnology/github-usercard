import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/malloryshea').then(res =>{


console.log(res)})
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
const cards = document.querySelector('.cards');

function cardMaker (gitHubTag){
  const container = document.createElement('div');
  const img = document.createElement('img');
  const cardInfo= document.createElement('div');
  const name= document.createElement('h3');
  const userName= document.createElement('p');
  const location= document.createElement('p');
  const profile= document.createElement('p');
  const profileAddress= document.createElement('a');
  const followers= document.createElement('p');
  const following= document.createElement('p');
  const bio= document.createElement('p');

  container.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');

  container.appendchild(img);
  container.appendchild(cardInfo);
  cardInfo.appendchild(name);
  cardInfo.appendchild(userName);
  cardInfo.appendchild(location);
  cardInfo.appendchild(profile);
  cardInfo.appendChild(profileAddress);
  cardInfo.appendchild(followers);
  cardInfo.appendchild(following);
  cardInfo.appendchild(bio);


axios.get(`https://api.github.come/users/${gitHubTag}`)
  .then(res => {
    innerHeight.src = res.data.evetar_url;
    name.textContent = res.data.name;
    userName.textContent = 'Username: ' +res.data.login;
    location.textContent = 'Lcation; ' +res.data.location;
    profileAddress.textContent = 'URL: ' +res.data.url;
    followers.textContent = 'Followers: ' +res.data.followers;
    following.textContent = 'Following: ' +res.data.following;
    bio.textContent = 'Bio: ' + res.data.bio;

  })
  .catch(err => {
    console.error(err)
  });

  const endGame = cards.appendChild(container);

  return endGame;
}

cardMaker('malloryshea');
const followersarray = [];
followersarray.push('tetondan');
followersarray.push('dustinmyers');
followersarray.push('justsml');
followersarray.push('luishrd');
followersarray.push('bigknell');

  /*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
