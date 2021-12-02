const { default: axios } = require("axios");

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get("https://api.github.com/users/Default025");
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
axios.get("https://api.github.com/users/Default025")
.then(resp => {
  cardMaker("https://api.github.com/users/Default025");
  ".cards".append(card)
}).catch(error => {
  console.error(error);
  const errorMsg = document.createElement('p');
  errorMsg.textContent = "error";
  entryPoint.appendChild(errorMsg);
}).finally(() => console.log("success"))
/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/
axios.get(`https://dog.ceo/api/breed/${breed}/images/random/${count}`)
const followersArray = ["tetondan","dustinmyers","justsml","luishrd","bigknell"];

  for (let i = 0; i < followersArray.length; i++) {
    axios.get(`https://api.github.com/users/${followersArray[i]}`)
  .then(resp => {
    cardMaker(`https://api.github.com/users/${followersArray[i]}`)
  }).catch(error => {
    console.error(error);
    const errorMsg = document.createElement('p');
    errorMsg.textContent = "error";
    entryPoint.appendChild(errorMsg);
  }).finally(() => console.log("success"))
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
function cardMaker(obj){
  const card = document.createElement("div");
  const userimg = document.createElement("img");
  const cardinfo = document.createElement("div");
  const h3name = document.createElement("h3");
  const pname = document.createElement("p");
  const userloc = document.createElement("p");
  const profile = document.createElement("p");
  const address = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  card.appendChild(userimg);
  card.appendChild(cardinfo);
  cardinfo.appendChild(h3name);
  cardinfo.appendChild(pname);
  cardinfo.appendChild(userloc);
  cardinfo.appendChild(profile);
  cardinfo.appendChild(followers);
  cardinfo.appendChild(following);
  cardinfo.appendChild(bio);
  profile.appendChild(address);

  card.classList("card");
  cardinfo.classList("card-info");
  h3name.classList("name");
  pname.classList("username");
  address.href = data.url;
  userimg.src = data.avatar_url;

  h3name.textContent = `user's name: ${data.name}`;
  pname.textContent = `username: ${username}`;
  userloc.textContent = `Location: ${data.location}`;
  address.textContent = `Profile: ${address}`;
  followers.textContent = `Followers: ${data.followers}`;
  following.textContent = `Following: ${data.following}`;
  bio.textContent = `Bio: ${data.bio}`;

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
