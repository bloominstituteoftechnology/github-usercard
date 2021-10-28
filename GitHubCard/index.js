const { default: axios } = require("axios");

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/deanhaleem')
.then()
.catch()



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
const entry = document.querySelector('.cards');

function cardMaker(obj){

  
  //create all elements for card
  const card = document.createElement('div');
  const img = document.createElement('img');
  const info = document.createElement('div');
  const name = document.createElement('h2');
  const username = document.createElement('h3')
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p')


  //apply proper class names for each element
  card.classList.add('card');
  name.classList.add('name');
  username.classList.add('username');

//append elements to card
  card.appendChild(img);
  card.appendChild(info);

  //appenmd elements to name
  info.appendChild(name);
  info.appendChild(username);
  info.appendChild(location);
  info.appendChild(profile);
  info.appendChild(followers);
  info.appendChild(following);
  info.appendChild(bio);


  //set attributes and text to elements
  img.src = obj.avatar_url;
  name.textContent = `${obj.name}`
  username.textContent = `${obj.login}`
  location.textContent = `Location: ${obj.location}`
  profile.textContent = `Profile: ${obj.html_url}`
  followers.textContent = `Followers: ${obj.followers}`
  following.textContent = `Following: ${obj.following}`
  bio.textContent = `Bio: ${obj.bio}`

  console.log(card)

  return card;

}

function getProfile(name){
  axios.get(`https://api.github.com/users/${name}`)
.then(resp =>{
    const user = cardMaker(resp.data);
    document.querySelector('.cards').appendChild(user);
})
.catch(err => {
  console.error(err);
})
}

getProfile('deanhaleem');

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

function getFollowers(name){

  const followersArray = [];

  axios.get(` https://api.github.com/users/${name}/followers`)
  .then(resp =>{
    
    for(i=0;i<resp.data.length;i++){
      followersArray.push(resp.data[i]);
    }
    console.log(followersArray)
    followersArray.forEach(elem => {
        const user = elem.login;
        getProfile(user);
    })
  })
  .catch(err => {
    console.error(err);
  })
}

getFollowers('deanhaleem');




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
