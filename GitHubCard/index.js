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

const followersArray = ["bradzickafoose","schoell411","peterevilla","tetondan","dustinmyers","justsml","luishrd","bigknell"];

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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

function componentCreator(x){
  let card = document.createElement('div');
  let img = document.createElement('img');
  let cardInfo = document.createElement('div');
  let name = document.createElement('h3');
  let username = document.createElement('p');
  let location = document.createElement('p');
  let profile = document.createElement('p');
  let address = document.createElement('a');
  let followers = document.createElement('p');
  let following = document.createElement('p');
  let bio = document.createElement('p');

  card.classList.add('card');
  card.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');

  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(address);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  img.src = x.data.avatar_url;
  name.textContent = x.data.name;
  username.textContent = x.data.login;
  location.textContent = x.data.location;
  address.href = x.data.html_url;
  followers.textContent = x.data.followers;
  following.textContent = x.data.following;
  bio.textContent = x.data.bio;

return card;

}

const cards = document.querySelector('.cards');


const firstPromise = axios.get('https://api.github.com/users/stevenwaldron')
  .then(result => {
    let y = componentCreator(result);
    cards.appendChild(y);
  })
  .catch(err => {
    console.log(err);
  })

 followersArray.forEach(x => {
  let promise = axios.get(`https://api.github.com/users/${x}`)
    .then(result => {
      let y = componentCreator(result);
      cards.appendChild(y);
    })
    .catch(err => {
      console.log(err);
    })

})
  
