/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

import axios from "axios";
import arrows from "./constants";

axios
  .get("https://api.github.com/users/OseiDevon")
  .then((res) => {
    cards.appendChild(cardMaker(res.data));
  })
  .catch((error) => {
    console.log(error);
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
    "tetondan"
    "dustinmyers"
    "justsml"
    "luishrd"
    "bigknell"
 ];
followersArray.forEach((user) => {
  axios.get(`https://api.github.com/users/${user}`).then((response) => {
    const attach = document.querySelector(".cards");
    const users = cardMaker(response.data);
    attach.appendChild(users);
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

const cards = document.querySelector(".cards");

function cardMaker(array) {
  const card = document.createElement("div");
  const image = document.createElement("img");
  const cardInfo = document.createElement("div");
  const name = document.createElement("h3");
  const userName = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const link = document.createElement("a");
  const followers = document.createElement("p");
  const followCount = document.createElement("p");
  const bio = document.createElement("p");
  const cardCont = document.createElement("div");
  const buttonCont = document.createElement("div");
  const cardButtons = document.createElement("div");
  const openButton = document.createElement("button");
  const closeButton = document.createElement("button");
  const cardContent = document.createElement("div");
  const cardImg = document.createElement("img");

  card.classList.add("card");
  cardCont.classList.add("card-container");
  cardInfo.classList.add("card-info");
  name.classList.add("name");
  userName.classList.add("username");
  buttonCont.classList.add("button-container");
  cardButtons.classList.add("card-buttons");
  cardContent.classList.add("card-content", "toggle-on");
  openButton.classList.add("card-btn-open");
  closeButton.classList.add("card-btn-close", "hide-btn");

  cardCont.appendChild(image);
  card.appendChild(cardCont);
  cardCont.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(link);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(followCount);
  cardInfo.appendChild(bio);
  card.appendChild(buttonCont);
  buttonCont.appendChild(cardButtons);
  buttonCont.appendChild(cardContent);
  cardContent.appendChild(cardImg);
  cardButtons.appendChild(openButton);
  cardButtons.appendChild(closeButton);

  image.setAttribute("src", array.avatar_url);
  link.href = array.html_url;
  openButton.textContent = arrows.open;
  closeButton.textContent = arrows.close;
  cardImg.setAttribute("src", `http://ghchart.rshah.org/${array.login}`);

  name.textContent = array.name;
  userName.textContent = array.login;
  location.textContent = `Location: ${array.location}`;
  profile.textContent = `Profile: ${link}`;
  link.textContent = array.html_url;
  followers.textContent = `Followers: ${array.followers}`;
  followCount.textContent = `Following: ${array.following}`;
  bio.textContent = `Bio: ${array.bio}`;

  cardButtons.addEventListener("click", (event) => {
    //  - the open button needs to go away (the 'hide-btn' class name controls this)
    openButton.classList.toggle("hide-btn");
    //  - the close button needs to show (the 'hide-btn' class name controls this)
    closeButton.classList.toggle("hide-btn");
    //  - the contents need to show (the 'toggle-on' class name controls this)
    cardContent.classList.toggle("toggle-on");
  });

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
