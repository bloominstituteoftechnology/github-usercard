/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

import axios from 'axios'




axios.get("https://api.github.com/users/Tereamarie")
.then(response => {
  const obj = response.data;
  document.querySelector('.cards').appendChild(CardCreator(obj));
})
.catch(error => {
  console.log(error)
})
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 
   Skip to Step 3.
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


const usersArray = ['tereamarie', 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];



function createCards(array) {
  for (let i = 0; i < array.length; i++) {
    axios.get(`https://api.github.com/users/${array[i]}`)
    .then(resp => {
      const entryPoint = document.querySelector('.cards');
      entryPoint.appendChild(cardMaker(resp.data));
    }).catch(error => {
      console.error(error);
    }).finally (() => console.log('working on it...'));
  }
}


createCards(usersArray)



/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.
    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.

const followersArray = [
  
  'eaczechova',
  'aaronmatson1',
  'marksayers46',
  'kmilliner888',
  'troopaloop8'];
  followersArray.forEach(follower=>{
    axios.get(`https://api.github.com/users/${follower}`)
      .then(info=>{
  
        const cards = document.querySelector('.cards');
        cards.append(CardCreator(info.data));
      })
  
  })

 

function CardCreator(object) {
  
  const card = document.createElement('div');
  card.classList.add('card');
  

  
  const img = document.createElement('img');
  img.src = object['avatar_url'];
  card.appendChild(img);

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  card.appendChild(cardInfo);

  const h3 = document.createElement('h3');
  h3.classList.add('name');
  h3.textContent = object.name;
  cardInfo.appendChild(h3);

  const username = document.createElement('p');
  username.classList.add('username');
  username.textContent = object.login;
  cardInfo.appendChild(username);

  const location = document.createElement('p');
  location.textContent = `Location: ${object.location}`;
  cardInfo.appendChild(location);



  const profile = document.createElement('p');
  profile.textContent = 'Profile:';
  cardInfo.appendChild(profile);

  const url = document.createElement('a');
  url.textContent = object.html_url;
  profile.appendChild(url);

  const followers = document.createElement('p');
  followers.textContent = `Followers: ${object.followers}`;
  cardInfo.appendChild(followers);

  const following = document.createElement('p');
  following.textContent = `Following: ${object.following}`;
  cardInfo.appendChild(following);

  const bio = document.createElement('p');
  bio.textContent = `Bio: ${object.bio}` || 'This user does not have a bio yet.';
  cardInfo.appendChild(bio);



  return card;
}
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





  
function cardMaker(obj) {
  
  //create elements for cards

  const card = document.createElement('div');
  const userImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const profileLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  //add classes/styling to elements

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');
  profileLink.href = obj.html_url;
  profileLink.textContent = obj.html_url;

  //add text to elements
  name.textContent = `Name: ${obj.name}`;
  userImg.src = obj.avatar_url; 
  userName.textContent = `Username: ${obj.login}`;
  location.textContent = `Location: ${obj.location}`;
  profile.textContent = `Profile: `;
  followers.textContent = `Followers: ${obj.followers}`;
  following.textContent = `Following: ${obj.following}`;
  bio.textContent = `Bio: ${obj.bio}`;
  

  //append elements
  const entryPoint = document.querySelector('.cards');
  entryPoint.appendChild(card);

  card.appendChild(userImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(profileLink);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
 
 //create card
  return card 
}



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

