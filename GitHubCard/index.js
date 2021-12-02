/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios';

const followersArray = [
  'Urukutelal',
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];        

function getCard(){
  followersArray.forEach(el => {
    axios.get(`https://api.github.com/users/${el}`)
    .then(r => {                                                          
      console.log(r.data);
      const cards =document.querySelector('.cards')
      cards.appendChild(cardMaker(r.data));
    }).catch(e =>{
      console.log(e);
    }).finally(()=>console.log('WooT!'))
  })
}
 


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/
//getCard();
/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
getCard();
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

function cardMaker(obj){

  const card = document.createElement('div');
  const img = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3')
  const UID = document.createElement('p');
  const loc = document.createElement('p');
  const profile = document.createElement('p');
  const aProfile = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  card.classList.add('card');
  img.src = obj.avatar_url;
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  name.textContent = obj.name;
  UID.classList.add('username');
  UID.textContent = obj.login;
  loc.textContent = `Location: ${obj.location}`;
  profile.textContent = `Profile: ${aProfile.href = obj.html_url}`;
  aProfile.href = obj.html_url;
  followers.textContent = `Followers: ${obj.followers}`;
  following.textContent = `Following: ${obj.following}`;
  bio.textContent = `Bio: ${obj.bio}`;

  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(UID);
  cardInfo.appendChild(loc);
  cardInfo.appendChild(profile);
  profile.appendChild(aProfile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  return card;

}
