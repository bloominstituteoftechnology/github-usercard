import axios from 'axios';
axios.get('https://api.github.com/users/jbanks628');
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

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/
const cardsElem = document.querySelector('.cards');
const myUsername = 'jbanks628'
const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];
axios.get(`https://api.github.com/users/${jbanks628}`)
 .then(userData => {
   cardsElem.appendChild(userElem(userData.data));
 })
 .catch(err => {
   console.error(err);
 });

 followersArray.forEach(followerLogin => {
   axios.get(`https://api.github.com/users/${followerLogin}`)
   .then(followerData => {
     cardsElem.appendChild(userElem(followerData.data));
   });
   .catch(err => console.error(err));
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

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
const cardsElem = document.querySelector('.cards');

function userElem ({login, name, location, followers, following, bio, html_url}) {
//Create Elements
const divCard = document.createElement('div')
const divInfo = document.createElement('div')
const img = document.createElement('img')
const uName = document.createElement('h3')
const paraUsername = document.createElement('p')
const paraLoc = document.createElement('p')
const paraProf = document.createElement('p')
const aHref = document.createElement('a')
const paraFollowers = document.createElement('p')
const paraFollowing = document.createElement('p')
const paraBio = document.createElement('p')

//adding classes
divCard.classList.add('card');
divInfo.classList.add('card-info');
uName.classList.add('name');
paraUsername.classList.add('username');

//adding text content
uName.textContent = `${name}`;
paraLoc.textContent = `${location}` || "None of your business";
paraUsername.textContent = `${login}`;
aHref.textContent = `${html_url}`;
paraFollowers.textContent = `${followers}`;
paraFollowing.textContent = `${following}`;
paraBio.textContent = `${bio}`;
paraProf.textContent = 'Profile:';

//link href and src
img.src = `${avatar_url}`;
aHref.href = `${html_url}`;

//append children
divCard.appendChild(img);
divCard.appendChild(div .card-info);
divInfo.appendChild(h3);
divInfo.appendChild(p);
paraProf.appendChild(a);

return divCard;

}
console.log(userElem());
