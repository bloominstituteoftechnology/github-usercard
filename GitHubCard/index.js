/**
 * /*
 *   STEP 1: using axios, send a GET request to the following URL
 *     (replacing the placeholder with your Github name):
 *     https://api.github.com/users/<your name>
 *
 * @format
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
    dustinmyers...
    justsml
    luishrd
    bigknell
*/

import axios from "axios";
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>

    //pulling from axios
*/
const cardHolder = document.querySelector(".cards");

axios
  .get("https://api.github.com/users/jamakura")
  .then(function (response) {
    cardHolder.appendChild(cardMaker(response));
  })
  .catch(function (error) {
    console.log(error);
  });

// STEP 2

//iterating over arrary

const followersArray = [
  "https://api.github.com/users/tetondan",
  "https://api.github.com/users/dustinmyers",
  "https://api.github.com/users/justsml",
  "https://api.github.com/users/luishrd",
  "https://api.github.com/users/bigknell",
];

followersArray.forEach((user) =>
  axios
    .get(user)
    .then(function (response) {
      cardHolder.appendChild(cardMaker(response));
    })
    .catch(function (error) {
      console.log(error);
    })
);

//  STEP 3

function cardMaker(obj) {
  //creating elements

  const card = document.createElement("div");
  const img = document.createElement("img");
  const cardInfo = document.createElement("div");
  const name = document.createElement("h3");
  const username = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const profileURL = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  //adding classes

  card.classList.add("card");
  cardInfo.classList.add("card-info");
  name.classList.add("name");
  username.classList.add("username");
  location.classList.add("location");

  // adding img

  img.src = obj.data.avatar_url;

  //adding text content

  name.textContent = obj.data.name;
  username.textContent = obj.data.login;
  location.textContent = obj.data.location;
  profile.textContent = "Profile:";
  followers.textContent = "Followers: " + obj.data.followers;
  following.textContent = "Following: " + obj.data.following;
  bio.textContent = obj.data.bio;

  profileURL.textContent = obj.data.url;
  profileURL.href = obj.data.url;

  // appending to DOM

  card.appendChild(img);
  card.appendChild(cardInfo);

  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(profileURL);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  console.log(card);
  return card;
}
