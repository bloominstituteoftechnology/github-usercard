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

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
const cardsElem = document.querySelector('.cards');

function userElem (user) {
//Create Elements
const divCard = document.createElement('div')
const divInfo = document.createElement('div')
const img = document.createElement('img')
const uName = document.createElement('h3')
const userName = document.createElement('p')
const location = document.createElement('p')
const profile = document.createElement('p')
const aHref = document.createElement('a')
const followers = document.createElement('p')
const following = document.createElement('p')
const bio = document.createElement('p')

//adding classes
divCard.classList.add('card');
divInfo.classList.add('card-info');
uName.classList.add('name');
userName.classList.add('username');

//adding text content
uName.textContent = user.name;
location.textContent = user.location || "None of your business";
userName.textContent = user.login;
aHref.textContent = user.html_url;
followers.textContent = user.followers;
following.textContent = user.following;
bio.textContent = user.bio;

//link href and src
img.src = user.avatar_url;
aHref.href = user.html_url;

//append children
divCard.appendChild(img);
divCard.appendChild(div .card-info);
divInfo.appendChild(h3);
divInfo.appendChild(p);
profile.appendChild(a);

return divCard;

}
console.log(userElem())
