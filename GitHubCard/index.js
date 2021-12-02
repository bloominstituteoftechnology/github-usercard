/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios';

function getData(user) {
axios.get(`https://api.github.com/users/${user}`)
  .then(resp => {
    console.log(resp.data);
    const user = gitCardMaker(resp.data) // user is now "equal to the whole HTML thing" I just built with getCardMaker
    document.querySelector('.cards').appendChild(user); // now appended 'user' ⬆️ to where .cards is inside the HTML
  }).catch(error => {
    console.error(error);
  }).finally(() => console.log('It works!!'))
}


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


const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell', 'Realseal177'];
// followersArray.forEach(followers => getData(followers))

for (let i = 0; i < followersArray.length; i++) {
  getData(followersArray[i])
}

 // STEP 3: Create a function that accepts a single object as its only argument. 
 // Using DOM methods and properties, create and return the following markup:
function gitCardMaker(object) {
  // instantiating elements
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
  // hierarchy
  card.appendChild(image);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(address);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  // class names
  card.classList.add('card');
  image.src = object.avatar_url;
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  name.textContent = `${object.name}`;
  userName.classList.add('userName');
  location.textContent = `Location: ${object.location}`;
  address.href = `${object.url}`
  address.textContent = `${object.url}`
  followers.textContent = `Followers: ${object.followers}`
  following.textContent = `Following: ${object.following}`
  bio.textContent = `Bio: ${object.bio}`

  return card;
}  

/*
getData('Realseal177');
getData('tetondan');
getData('dustinmyers');
getData('justsml');
getData('luishrd');
getData('bigknell');
*/

// document.querySelector('.cards').appendChild(user); //

/*
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
const Object = { login: "Realseal177", id: 90492724, node_id: "MDQ6VXNlcjkwNDkyNzI0", avatar_url: "https://avatars.githubusercontent.com/u/90492724?v=4", gravatar_id: "", url: "https://api.github.com/users/Realseal177", html_url: "https://github.com/Realseal177", followers_url: "https://api.github.com/users/Realseal177/followers", following_url: "https://api.github.com/users/Realseal177/following{/other_user}", gists_url: "https://api.github.com/users/Realseal177/gists{/gist_id}" }
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
