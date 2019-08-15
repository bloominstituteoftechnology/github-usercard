/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

*/

const cards = document.querySelector('.cards');

function githubCard (card) {
  // creating the variables
  const card = document.createElement('div');
  const image = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const address = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  // adding the classes to the elements
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');

  // appending the elements
  card.appendChild(image);
  card.appendChild(cardinfo);
  cardinfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(address);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  // adding textContent to the elemements
  image.textContent = card.image;
  name.textContent = card.name;
  userName.textContent = card.username;
  location.textContent = card.location;
  profile.textContent = card.profile;
  address.textContent = card.address;
  followers.textContent = card.followers;
  following.tetContent = card.following;
  bio.tetContent = card.bio;
}

axios.get(https://api.github.com/users/nickdurbin)
axios.get(https://api.github.com/users/tetondan)
axios.get(https://api.github.com/users/dustinmyers)
axios.get(https://api.github.com/users/justml)
axios.get(https://api.github.com/users/luishrd)
axios.get(https://api.github.com/users/bigKnell)
