import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

function getGitHub(userHandle) {
  const cardsContainer = document.querySelector('.cards');
  const myGithub = axios.get(`https://api.github.com/users/${userHandle}`)
    .then(res => {
      // console.log(res);
      const gitHubCard = githubCardMaker(res);
      cardsContainer.appendChild(gitHubCard);
    })
    .catch(err => {
      console.error(err);
    })
    ;
  // console.log(myGithub)
}

getGitHub('jmerz826');




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

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.forEach(person => {
  getGitHub(person);
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
function githubCardMaker(obj) {
  // Portion of dom in which we will inject our github card

  // Gets data from inputted handle's github account 

  // create html element variables
  const cardDiv = document.createElement('div');
  const image = document.createElement('img');
  const infoDiv = document.createElement('div');
  const usernameTitle = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const link = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  // add classes where appropriate
  cardDiv.classList.add('card');
  infoDiv.classList.add('card-info');
  usernameTitle.classList.add('name');
  username.classList.add('username');

  // add content to the elements
  image.setAttribute('src', obj.data.avatar_url);
  usernameTitle.textContent = obj.data.name;
  username.textContent = obj.data.login;
  location.textContent = obj.data.location;
  profile.textContent = 'Profile:';
  link.setAttribute('href', obj.data.url);
  link.textContent = obj.data.url;
  followers.textContent = obj.data.followers;
  following.textContent = obj.data.following;
  bio.textContent = obj.data.bio;

  // Create heirarchal order
  cardDiv.appendChild(image);
  cardDiv.appendChild(infoDiv);
  infoDiv.appendChild(usernameTitle);
  infoDiv.appendChild(username);
  infoDiv.appendChild(location);
  infoDiv.appendChild(profile);
  profile.appendChild(link);
  infoDiv.appendChild(followers);
  infoDiv.appendChild(following);
  infoDiv.appendChild(bio);


  return cardDiv;
}
// console.log(myGithub)
// githubCardMaker(myGithub);
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
