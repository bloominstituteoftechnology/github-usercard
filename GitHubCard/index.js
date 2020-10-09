import axios from "axios";

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get("https://api.github.com/users/rodolfojaspe").then(appendData);

// axios.get("https://api.github.com/users/tetondan").then(appendData);
const cards = document.querySelector(".cards");

function appendData(par) {
  let card = cardMaker(par.data);
  cards.appendChild(card);
}

function appendFollowers(par) {
  par.data.forEach((follower) => {
    let card = cardMaker(follower);
    cards.appendChild(card);
  });
  console.log(par);
}
axios
  .get("https://api.github.com/users/tetondan/followers")
  .then(appendFollowers);
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

followersArray.forEach((person) => {
  axios.get(`https://api.github.com/users/${person}`).then(appendData);
});
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:
*/

function cardMaker(obj) {
  //   console.log(obj);

  const card = document.createElement("div");
  card.classList.add("card");
  //   console.log(card);

  const image = document.createElement("img");
  image.setAttribute("src", obj.avatar_url);
  //   console.log(image);
  //   console.log(obj.avatar_url);

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");

  const name = document.createElement("h3");
  name.classList.add("name");
  name.textContent = obj.name;

  const userName = document.createElement("p");
  userName.classList.add("username");
  userName.textContent = obj.login;

  const location = document.createElement("p");
  location.textContent = `Location: ${obj.location}`;

  const profile = document.createElement("p");

  const address = document.createElement("a");
  address.setAttribute("href", obj.html_url);
  address.textContent = obj.html_url;

  const followers = document.createElement("p");
  followers.textContent = `Followers: ${obj.followers}`;

  const following = document.createElement("p");
  following.textContent = `Following: ${obj.following}`;

  const bio = document.createElement("p");
  bio.textContent = `Bio: ${obj.bio}`;

  card.appendChild(image);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(address);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  return card;
}

/*
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
