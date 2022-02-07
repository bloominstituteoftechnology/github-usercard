import axios from 'axios';

/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
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

const followersArray = [
  
  'eaczechova',
  'aaronmatson1',
  'marksayers46',
  'tetondan',
 ' dustinmyers',
  'justsml',
 ' luishrd',
 'bigknell',
];
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