
import axios from 'axios';

function createCard(data){
  let cardDiv = document.createElement('div');
  cardDiv.classList.add('card');
  let img = document.createElement('img');
  img.setAttribute('src', data.avatar_url);
  let cardInfoDiv = document.createElement('div');
  cardInfoDiv.classList.add('card-info');
  let h3 = document.createElement('h3');
  h3.textContent = data.name;
  h3.classList.add('name');
  let p1 = document.createElement('p');
  p1.textContent = data.login;
  p1.classList.add('username');
  let p2 = document.createElement('p');
  p2.textContent = 'Location: ' + data.location;
  let p3 = document.createElement('p');
  p3.textContent = 'Profile: ' ;
  let a = document.createElement('a');
  a.textContent = data.html_url;
  a.setAttribute('href', data.html_url);
  let p4 = document.createElement('p');
  p4.textContent = 'Followers: '+  data.followers;
  let p5 = document.createElement('p');
  p5.textContent = 'Following: '+  data.following;
  let p6 = document.createElement('p');
  p6.textContent = 'Bio: '+  data.bio;
  p3.appendChild(a);
  cardInfoDiv.appendChild(h3);
  cardInfoDiv.appendChild(p1);
  cardInfoDiv.appendChild(p2);
  cardInfoDiv.appendChild(p3);
  cardInfoDiv.appendChild(p4);
  cardInfoDiv.appendChild(p5);
  cardInfoDiv.appendChild(p6);
  cardDiv.appendChild(img);
  cardDiv.appendChild(cardInfoDiv);
  return cardDiv;
}

axios.get('https://api.github.com/users/Jacobugath')
  .then((r) => {
  let cards = document.querySelector('.cards');
  cards.appendChild(createCard(r.data));
})

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
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
followersArray.push('tetondan');
followersArray.push('dustinmyers');
followersArray.push('justsml');
followersArray.push('luishrd');
followersArray.push('bigknell');

followersArray.forEach( (element) =>{
  console.log('yes');
  axios.get('https://api.github.com/users/'+element)
  .then((r) => {
    console.log(r.data);
    let cards = document.querySelector('.cards');
    cards.appendChild(createCard(r.data));
})
})


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
