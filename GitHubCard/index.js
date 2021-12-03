/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios';

const followersArray = ['tetondan','dustinmyers','justsml','luishrd','bigknell'];

for (let i = 0; i < followersArray.length; i++) {
  getGitCard(followersArray[i]);
}

function getGitCard(username){
  axios.get(`https://api.github.com/users/${username}`)
  .then(resp =>{
    documment.querySelector('.cards').appendChild(githubCard(resp.data));
})
.catch(err => console.error(err))
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





function githubCard(gitInfo) {
  const card = document.createElement('div');
  const img = document.createElement('img');
  const cardInfo =  document.createElement('div');
  const named = document.createElement('h3');
  const login = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const profileLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');



  img.src = gitInfo.avatar_url;
  img.alt = 'github user';
  named.textContent = gitInfo.name;
  login.textContent = gitInfo.login;
  location.textContent = gitInfo.location;
  profile.textContent = 'Profile';
  profileLink.textContent = 'Link to profile';
  profileLink.href = gitInfo.html_url;
  followers.textContent = `Followers: ${gitInfo.followers}`;
  following.textContent = `Followering: ${gitInfo.following}`;
  bio.textContent = gitInfo.bio;

  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(login);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(profileLink);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  return card;
}
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

card.ClassList.add('card');
cardInfo.ClassList.add('card-info');
named.ClassList.add('name');
login.ClassList.add('username');

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
