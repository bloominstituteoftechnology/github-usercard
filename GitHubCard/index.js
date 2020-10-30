// const { default: Axios } = require("axios");
import axios from "axios";

axios
  .get("https://api.github.com/users/antoine-bibb")
  .then((res) => {
    const user = res.data;
    console.log(user);
    cardMaker(user);
  })
  .catch((err) => {
    console.log("uh-oh somethings wrong buddy", err);
  });
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
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
];
followersArray.map((item) => {
  axios
    .get(`https://api.github.com/users/${item}`)
    .then((res) => {
      const users = res.data;
      entryPoint.appendChild(cardMaker(users));
    })
    .catch((err) => {
      console.log("hey man come check this out!", err);
    });
});
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
const entryPoint = document.querySelector(".cards");

function cardMaker(user) {
  const card = document.createElement("div");
  const img = document.createElement("img");
  const cardInfo = document.createElement("div");
  const name = document.createElement("h3");
  const userName = document.createElement("p");
  const located = document.createElement("p");
  const profile = document.createElement("p");
  const url = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");
  //set classNames
  card.classList.add("card");
  cardInfo.classList.add("card-info");
  name.classList.add("name");
  userName.classList.add("username");

  //add text
  img.src = `${user.avatar_url}`;
  cardInfo.textContent = `Name: ${user.name}`;
  userName.textContent = `Username: ${user.username}`;
  location.textContent = `Location: ${user.location}`;
  profile.textContent = `Profile: ${user.URL}`;
  followers.textContent = `followers: ${user.followers}`;
  following.textContent = `following: ${user.following}`;
  bio.textContent = `Bio: ${user.bio}`;

  //appendchildren
  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(located);
  cardInfo.appendChild(profile);
  profile.appendChild(url);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  entryPoint.appendChild(card);

  //return something
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
