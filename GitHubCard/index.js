/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
          
*

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



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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

const createNewCard = githubResponse => {
  const userData = githubResponse.data;
  console.log(userData);

  const card = document.createElement('div');
  const pic = document.createElement('img');
  const info = document.createElement('div');
  const name = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const profileLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  card.classList.add('card');
  info.classList.add('card-info');

  name.classList.add('name');
  username.classList.add('username');

  pic.src = userData.avatar_url;
  name.textContent = userData.name;

  username.textContent = userData.login;
  location.textContent = `Location: ${userData.location}`;
  profileLink.setAttribute('href', userData.html_url);
  profileLink.textContent = userData.html_url;
  followers.textContent = `Followers: ${userData.followers}`;
  following.textContent = `Following: ${userData.following}`;
  bio.textContent = `Bio: ${userData.bio}`;

  card.appendChild(pic);
  card.appendChild(info);
  info.appendChild(name);
  info.appendChild(username);
  info.appendChild(location);
  info.appendChild(profile);
  profile.appendChild(profileLink);
  info.appendChild(followers);
  info.appendChild(following);
  info.appendChild(bio);

  return card;
}

const getUserData = username => {
  return axios.get(`http://api.github.com/users/${username}`);
  
  }

const addCardToPage = card => {
  const cards = document.querySelector('.cards');
  cards.appendChild(card);
}
const logError = error => {
  console.log(error);
}
const users = ['zbtaylor', 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];
const cards = document.querySelector('.cards');

users.map(user => {
  getUserData(user)
    .then(createNewCard, logError)
    .then(addCardToPage, logError);

})
