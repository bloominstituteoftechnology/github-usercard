/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from "axios";
axios
  .get(`https://api.github.com/users/nekhan2020`)
  .then((res) => {
    const gitHubData = res.data;
    gitCardMaker(gitHubData);
    console.log(gitHubData.html_url);
    console.log("this is the data coming in", gitHubData);
  })
  .catch((badStuff) => {
    console.error("CASUALTY:", badStuff);
  });

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
  "Aszalea-Calderon",
  "SinEstres",
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
];

setTimeout(() => {
  followersArray.forEach((person) => {
    axios
      .get(`https://api.github.com/users/${person}`)
      .then((res) => {
        const followerInfo = res.data;
        gitCardMaker(followerInfo);
      })
      .catch((error) => {
        console.log("Things didn't work out:", error);
      });
  });
}, 500);

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

const cardsContainer = document.querySelector(".cards");

function gitCardMaker(postMaker) {
  //! elements
  const cardDiv = document.createElement("div");
  const cardImg = document.createElement("img");
  const divInfo = document.createElement("div");
  const cardH3 = document.createElement("h3");
  const pUser = document.createElement("p");
  const pLocation = document.createElement("p");
  const pProfile = document.createElement("p");
  const aTag = document.createElement("a");
  const pFollowers = document.createElement("p");
  const pFollowing = document.createElement("p");
  const pBio = document.createElement("p");

  //! classes
  cardDiv.classList.add("card");
  cardH3.classList.add("name");
  divInfo.classList.add("card-info");
  pUser.classList.add("username");

  //! appending
  cardDiv.append(cardImg);
  cardDiv.append(divInfo);
  divInfo.append(cardH3);
  divInfo.append(pUser);
  divInfo.append(pLocation);
  divInfo.append(pProfile);
  pProfile.append(aTag);
  divInfo.append(pFollowers);
  divInfo.append(pFollowing);
  divInfo.append(pBio);

  //! adding text/data
  cardImg.src = postMaker.avatar_url;
  cardH3.innerHTML = postMaker.name;
  pUser.innerHTML = postMaker.login;
  pLocation.innerHTML = postMaker.location;
  pProfile.innerHTML = "Profile:";
  aTag.textContent = postMaker.html_url;
  aTag.href = postMaker.html_url;

  // aTag.innerHTML = `Link to ${postMaker.name}'s GitHub Page!`;
  // aTag.href = postMaker.html_url;
  pFollowers.innerHTML = `${postMaker.name} has ${postMaker.followers} followers!`;
  pFollowing.innerHTML = `${postMaker.name} is following ${postMaker.following} other developers!`;
  pBio.innerHTML = `${postMaker.name}'s Bio: ${postMaker.bio}`;

  return cardsContainer.append(cardDiv);
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
