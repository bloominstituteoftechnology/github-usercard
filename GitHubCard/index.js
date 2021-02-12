/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios';
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/
axios
.get('https://api.github.com/users/aleksandr-ardanov')
/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
const card = document.querySelector('.cards');

axios
.get('https://api.github.com/users/aleksandr-ardanov')
.then(res =>{
  card.appendChild(cardCreator(res.data));
  console.log('all is fine')
})
.catch(err =>{
  console.log(err);
})
.then( () => {
  console.log('done')
})
/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan','dustinmyers','justsml','luishrd','bigknell'];

function addInstructor(array){
  array.forEach(instructor => {
    axios
    .get(`https://api.github.com/users/${instructor}`)
    .then(res =>{
      card.appendChild(cardCreator(res.data));
      console.log('all is fine')
    })
    .catch(err =>{
      console.log(err);
    })
    .then( () => {
      console.log('done')
    })
  })
}
addInstructor(followersArray);
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
function cardCreator(object){
  //create elements
  const card = document.createElement('div');
  const img = document.createElement('img');
  const cardInfo = document.createElement('div');
  const nameH3 = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const address = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');
  //add classes
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  nameH3.classList.add('name');
  username.classList.add('username');
  //add text content
  nameH3.textContent = object.name;
  username.textContent = object.login;
  location.textContent = `Location: ${object.location}`;
  profile.textContent = 'Profile: ';
  address.textContent = object['html_url'];
  followers.textContent = object.followers;
  following.textContent = object.following;
  bio.textContent = object.bio;
  //add urls
  img.src = object['avatar_url'];
  address.href = object['html_url'];
  //make hierarchy
  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(nameH3);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(address);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  //return card
  return card;
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/


// stretch task function which adds person and followers
function addFollowers(name){
    axios
    .get(`https://api.github.com/users/${name}`)
    .then(res =>{
      card.appendChild(cardCreator(res.data));
      console.log('all is fine')
    })
    .catch(err =>{
      console.log(err);
    })
    .then( () => {
      axios
      .get(`https://api.github.com/users/${name}/followers`)
      .then(res => {
        console.log(res);
        const array = res.data;
        array.forEach(follower => {
          axios
          .get(`https://api.github.com/users/${follower.login}`)
          .then(res => 
            {card.appendChild(cardCreator(res.data))})
          .catch(err => {
            console.log(err); //! i'm not sure it's really needed becayse .catch below works fine
          })
        })
      })
      .catch(err => {
        debugger
        console.log(err)
      })
    })
  }

  addFollowers('justsml')
  addFollowers('luishrd')
