import axios from "axios";

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const entryPoint = document.querySelector(".cards");
axios
  .get("https://api.github.com/users/Christopher-Barrett")
  .then((cont) => {
    const entry = cont.data;
    console.log(entry);
    cardMaker(entry);
  })
  .catch((error) => {
    debugger;
  });

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/
axios
  .get("https://api.github.com/users/Christopher-Barrett/followers")
  .then((followers) => {
    const entryPoint = document.querySelector(".cards");
    console.log("followers", followers.data);
    followers.data.forEach(function (followObj) {
      axios
        .get(`https://api.github.com/users/${followObj.login}`)
        .then((responseObj) => {
          console.log(responseObj);
          cardMaker(responseObj.data);
        })
        .catch((error) => {
          debugger;
        });
    });
  })
  .catch((error) => {
    debugger;
  });
// entryPoint.appendChild(cardMaker);
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
  "https://api.github.com/users/tetondan",
  "https://api.github.com/users/dustinmyers",
  "https://api.github.com/users/justsml",
  "https://api.github.com/users/luishrd",
  "https://api.github.com/users/bigknell",
];

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
// const cards = document.querySelector(".cards");
// cards.appendChild();
function cardMaker(cardObj) {
  // instantiating the elements
  const userCard = document.createElement("div");
  const image = document.createElement("img");
  const userInfo = document.createElement("div");
  const name = document.createElement("h3");
  const userName = document.createElement("p");
  const location = document.createElement("p");
  const prof = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");
  // setting class names, attributes and text
  image.src = cardObj.avatar_url;
  name.textContent = cardObj.name;
  userName.textContent = cardObj.login;
  location.textContent = `Location: ${cardObj.location}`;
  prof.innerHTML = `Profile:<a href= ${cardObj.url}>${cardObj.url}</a>`;
  followers.textContent = `Followers:${cardObj.followers}`;
  following.textContent = `Following:${cardObj.following}`;
  bio.textContent = `Bio:${cardObj.bio}`;

  userCard.classList.add("card-info");
  entryPoint.appendChild(userCard);
  userCard.appendChild(userInfo);
  userCard.appendChild(image);
  userInfo.appendChild(name);
  userInfo.appendChild(userName);
  userInfo.appendChild(location);
  userInfo.appendChild(prof);
  userInfo.appendChild(followers);
  userInfo.appendChild(following);
  userInfo.appendChild(bio);

  const cards = document.querySelector(".cards");
  cards.append(userCard);
  return userCard;
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
