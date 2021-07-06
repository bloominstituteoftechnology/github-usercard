import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios
.get("https://api.github.com/users/CerritoCode0101")
.then((res) => {
const info = res.data;
const page = document.querySelector('.cards');
const maker = gitMaker(info);
page.appendChild(maker);
console.log(page);

});
// .catch((err) => {
// console.log('error', err);
// });


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

const followersArray = [
  "https://github.com/tetondan",
  "https://github.com/dustinmyers",
  "https://api.github.com/users/justsml",
  "https://api.github.com/users/luishrd",
  "https://api.github.com/users/bigknell"

];

followersArray.forEach(follower => {
  axios.get(`${follower}`)
  .then(res => {
    const card = gitMaker(res.data);
    const cardClass = document.querySelector('.cards');
    cardClass.appendChild(card)

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


function gitMaker(data){
  const parent = document.createElement('div');
  const img = document.createElement('img');
  const subDiv = document.createElement('div');
  const name = document.createElement('h3');
  const userP = document.createElement('p');
  const locationP = document.createElement('p');
  const profileP = document.createElement('p');
  const anchor = document.createElement('a')
  const followersP = document.createElement('p');
  const followingP = document.createElement('p');
  const bioP = document.createElement('p');

  parent.className = 'card'
  subDiv.className = 'card-info'
  name.className = 'name'
  userP.className = 'username'

  parent.appendChild(img);
  parent.appendChild(subDiv);
  subDiv.appendChild(name);
  subDiv.appendChild(userP);
  subDiv.appendChild(locationP);
  subDiv.appendChild(profileP);
  profileP.appendChild(anchor);
  subDiv.appendChild(followersP);
  parent.appendChild(followingP);
  parent.appendChild(bioP);

  anchor.setAttribute("href", data.url);
  img.setAttribute('src', data.avatar_url);  
  
  name.textContent = `Name: ${data.name}`;
  userP.textContent = `Username: ${data.login}`;
  locationP.textContent = `Location:${data.location}`;
  profileP.textContent = `Profile: ${data.url}`;
  followersP.textContent = `Followers: ${data.followers}`;
  followingP.textContent = `Following: ${data}`;
  bioP.textContent = `Bio: ${data.bio}`;

  
return parent;
}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
