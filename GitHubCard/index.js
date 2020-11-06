const axios = require("axios");

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const getPractice = axios
  .get("https://api.github.com/users/nico-herrera")
  .then((res) => {
    console.log(res);
    const info = returnHTML(res.data);
    document.querySelector("body").appendChild(info);
  })
  .catch((err) => {
    console.log(err);
  });

console.log(getPractice);
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

followersArray.forEach((item) => {
  axios
    .get(`https://api.github.com/users/${item}`)
    .then((res) => {
      console.log(res.data);
      const info = returnHTML(res.data);
      document.querySelector("body").appendChild(info);
    })
    .catch((err) => {
      console.log(err);
    });
});
console.log;
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

const data = getPractice.data;
console.log(data);

function returnHTML(data) {
  const mainDiv = document.createElement("mainDiv"); // main div
  mainDiv.classList.add("card");

  const img = document.createElement("img"); // image
  img.src = data.avatar_url;

  const div = document.createElement("div"); // inner div
  div.classList.add("card-info");

  const name = document.createElement("h3"); // h3 element
  name.textContent = data.name;
  name.classList.add("name");

  const username = document.createElement("p");
  username.classList.add("username");
  username.textContent = data.login;

  const location = document.createElement("p");
  location.textContent = `Location: ${data.location}`;

  const profile = document.createElement("p");
  const a = document.createElement("a");
  a.href = data.url;
  profile.textContent = a;

  const followers = document.createElement("p");
  followers.textContent = `Followers: ${data.followers}`;

  const following = document.createElement("p");
  following.textContent = `Following: ${data.following}`;

  const bio = document.createElement("p");
  bio.textContent = `Bio: ${data.bio}`;

  mainDiv.appendChild(img);
  mainDiv.appendChild(div);
  div.appendChild(name);
  div.appendChild(username);
  div.appendChild(location);
  div.appendChild(profile);
  profile.appendChild(a);
  div.appendChild(followers);
  div.appendChild(following);
  div.appendChild(bio);

  return mainDiv;
}

// console.log(returnHTML(data));

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
