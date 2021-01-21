
import axios from 'axios';
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
const cardContain = document.querySelector(".cards");
function cardMaker(object){
  
//making elements

const divCard = document.createElement('div');
const cardImage = document.createElement('img');

const divInfo = document.createElement('div');
const userName = document.createElement('h3');
const pUserName = document.createElement('p');
const pUserLocation = document.createElement('p');

const pUserProfile = document.createElement('p');
const UserProfileLink = document.createElement('a');

const pUserFollowers = document.createElement('p');
const pUserFollowing = document.createElement('p');
const pUserBio = document.createElement('p');

const txtContent = document.createElement('div')

//placing elements

divCard.appendChild(cardImage);
divCard.appendChild(divInfo);

divInfo.appendChild(userName);
divInfo.appendChild(pUserName);
divInfo.appendChild(pUserLocation);
divInfo.appendChild(pUserProfile);
divInfo.appendChild(pUserFollowers);
divInfo.appendChild(pUserFollowing);
divInfo.appendChild(pUserBio);

pUserProfile.appendChild(UserProfileLink);
pUserProfile.appendChild(txtContent);

// content

userName.textContent = object.name;
pUserName.textContent = object.username;

pUserLocation.textContent = `Location: ${object.location}`;
pUserFollowers.textContent = `Followers: ${object.followers}`;
pUserFollowing.textContent = `Following: ${object.following}`;
pUserBio.textContent = `Bio: ${object.bio}`

txtContent.textContent = 'Profile';
UserProfileLink.textContent = object.html_url;

divCard.classList.add("card");
cardImage.src = object.avatar_url;

divInfo.classList.add("card-info");
userName.classList.add("name");

  pUserName.classList.add("username");
  UserProfileLink.href = object.html_url;


  console.log(divCard);
  return divCard;

}


/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

axios 
  .get("https://api.github.com/users/SpacelessTime")
  .then((res) => {
    const user = res.data;
    const divCard = cardMaker(user);
    cardContain.appendChild(divCard);
  })
    .catch((err) => {
      console.log(err);
  });









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
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell',
];

followersArray.forEach(follower => {
  axios.get(`https://api.github.com/users/${follower}`)
  .then((res) => {
    const user = res.data;
    const userCard = cardMaker(user);
    cardContain.appendChild(userCard);
  })
  .catch((err) => {
    console.log(err);
  });
})






