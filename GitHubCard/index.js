/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const {default: axios} = require("axios");

axios.get("https://api.github.com/users/emmalouiseread");
.then(response => {
  appendData(response.data);
});
.catch(err => {
  console.log(err);
});
.then(() => {
  console.log("Success");
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

let cards = document.querySelector(".cards");

const followersArray = [];
followersArray.push("tetondan", "dustinmyers", "justsml", "luishr", "bigknell");

followersArray.forEach(person => {
  axios.get(`https://api.github.com/users/${person}`)
  .then(response => {
    let recieved = response.data;
    let newcard = card(recieved);
    cards.appendChild(newcard);
  });
  .catch(err => {
  console.log(err);
});
.then(() => {
  console.log("Success");
});
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

const card = function(obj) {
  let firstDiv = document.createElement("div");
  firstDiv.className = "card";
  let img = document.createElement("img");
  firstDiv.appendChild(img);
  let secondDiv = document.createElement("div");
  secondDiv.className = "card-info";
  firstDiv.appendChild(secondDiv);
  let title = document.createElement("h3");
  h3.className = "name";
  secondDiv.appendChild(title);
  let username = document.createElement("p");
  username.className = "username";
  secondDiv.appendChild(username);
  let location = document.createElement("p");
  secondDiv.appendChild(location);
  let profile = document.createElement("p");
  secondDiv.appendChild(profile);
  let address = document.createElement("a");
  profile.appendChild(address);
  let followers = document.createElement("p");
  secondDiv.appendChild(followers);
  let following = document.createElement("p");
  secondDiv.appendChild(following);
  let bio = document.createElement("p");
  secondDiv.appendChild(bio);
  img.src = obj.avatar_url;
  username.textContent = obj.login;
  location.textContent = `Location: ${obj.location}`;
  profile.textContent = "Profile:";
  address.setAttribute(obj.html_url);
  address.textContent = obj.html_url;
  followers.textContent = `Followers: ${obj.followers}`;
  following.textContent = `Following: ${obj.following}`;
  bio.textContent = `Bio: ${obj.bio}`;
  return firstDiv;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
