/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from "axios";

const followersArray = ['tetondan',
'dustinmyers',
'justsml',
'luishrd',
'bigknell'];

followersArray.forEach(e =>{
  addMoreCards(e)
})
    
  function addMoreCards(name){
    axios.get(`https://api.github.com/users/${name}`)
    .then(response =>{
        container.appendChild(gHubCard(response.data))
    })
    .catch(err => {
      debugger
    })
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

// const followersArray = [
//   'https://api.github.com/users/dustinmyers',
//   'https://api.github.com/users/JordonP123',
//   'https://api.github.com/users/justsml',
//   'https://api.github.com/users/luishrd',
//   'https://api.github.com/users/bigknell',
// ]

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

function gHubCard(obj){
  //elements apart of gHub card;
const containerDiv = document.createElement('div');
const img = document.createElement('img');
const secondContainerDiv = document.createElement('div');
const h3 = document.createElement('h3');
const pUser = document.createElement('p');
const pLoc = document.createElement('p');
const pProfile = document.createElement('p');
const pFollowers = document.createElement('p');
const pFollowing = document.createElement('p');
const pBio = document.createElement('p');
const anchor = document.createElement('a')

//appending children
containerDiv.appendChild(img);
containerDiv.appendChild(secondContainerDiv);
secondContainerDiv.appendChild(h3);
secondContainerDiv.appendChild(pUser);
secondContainerDiv.appendChild(pLoc);
secondContainerDiv.appendChild(pProfile);
secondContainerDiv.appendChild(pFollowers);
secondContainerDiv.appendChild(pFollowing);
secondContainerDiv.appendChild(pBio);
pProfile.appendChild(anchor)


//adding classes
containerDiv.classList.add('card');
secondContainerDiv.classList.add('card-info');
h3.classList.add('name');
pUser.classList.add('username');

//adding textContent
img.src = obj.avatar_url;
h3.textContent = obj.name;
pUser.textContent = obj.login;
pLoc.textContent = 'Location';
pLoc.textContent = obj.location;
pProfile.textContent = 'Profile';
anchor.href = obj.html_url;
pFollowers.textContent = `Followers: ${obj.followers}`
pFollowing.textContent = `Following: ${obj.following}`
pBio.textContent = `Bio: ${obj.bio}`

return containerDiv

}
//testing appends
const container = document.querySelector('.cards');
// console.log(container.appendChild(gHubCard()))




/*
  List of LS Instructors Github username's:
    'tetondan',
    'dustinmyers',
    'justsml',
    'luishrd',
    'bigknell'
*/
