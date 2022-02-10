import axios from "axios";
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
function getGitCard(username){
axios.get(`https://api.github.com/users/${username}`)
.then( resp => {
  document.querySelector('.cards').appendChild(cardMaker(resp.data));
})
.catch( err => {
  console.error(err)
})
}
// install, import (maybe export)
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

// const newCard = (name) => {
//   axios.get(`https://api.github.com/users/${name}`)
// .then( resp => {
//   resp.data
// })
// .catch( err => {
//   console.log("Couldn't retrieve data.")
// })
// }

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

followersArray.forEach(item =>
  getGitCard(item));


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

function cardMaker(gitInfo) {
  
// create elements

  const gitHubCard = document.createElement("div");
  const cardImg = document.createElement("img");
  const cardInfo = document.createElement("div");
  const cardName = document.createElement("h3");
  const cardUserName = document.createElement("p");
  const cardLocation = document.createElement("p");
  const cardProfile = document.createElement("p");
  const cardAddress = document.createElement("a");
  const cardFollowers = document.createElement("p");
  const cardFollowing = document.createElement("p");
  const cardBio = document.createElement("p");

// establish heirarchy

  gitHubCard.appendChild(cardImg);
  gitHubCard.appendChild(cardInfo);
  cardInfo.appendChild(cardName);
  cardInfo.appendChild(cardUserName);
  cardInfo.appendChild(cardLocation);
  cardInfo.appendChild(cardProfile);
  cardProfile.appendChild(cardAddress);
  cardInfo.appendChild(cardFollowers);
  cardInfo.appendChild(cardFollowing);
  cardInfo.appendChild(cardBio);

// set class names, attributes, and text

  gitHubCard.classList.add("card");
  cardImg.src = gitInfo.avatar_url;
  cardImg.alt = "github user";
  cardInfo.classList.add("card-info");
  cardName.classList.add("name");
  cardName.textContent = `${gitInfo.name}`;
  cardUserName.classList.add("username");
  cardUserName.textContent = `${gitInfo.login}`;
  cardLocation.textContent = `Location: ${gitInfo.location}`;
  cardProfile.textContent = 'Profile:';
  cardAddress.href = gitInfo.html_url;
  cardAddress.textContent = `${gitInfo.blog}`;
  cardFollowers.textContent = `${gitInfo.followers}`;
  cardFollowing.textContent = `${gitInfo.following}`;
  cardBio.textContent = `Bio: ${gitInfo.bio}`;

  return gitHubCard;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
