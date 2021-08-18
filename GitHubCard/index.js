import axios from "axios";

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get("https://api.github.com/users/victoriaanndupont").then((response) => {
  const container = document.querySelector(".cards");
  container.appendChild(cardMaker(response.data));

  for (let i = 0; i < followersArray.length; i++) {
    axios
      .get(`https://api.github.com/users/${followersArray[i]}`)
      .then((response) => {
        container.appendChild(cardMaker(response.data));
      });
  }
});

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
    dustinmyers
    justsml
    luishrd
    bigknell
*/
function cardMaker(obj) {
  const card1 = document.createElement("div");
  const img = document.createElement("img");
  const cardInfo = document.createElement("div");
  const h3 = document.createElement("h3");
  const username1 = document.createElement("p");
  const location1 = document.createElement("p");
  const profile1 = document.createElement("p");
  const link = document.createElement("href");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  card1.classList.add("card");
  cardInfo.classList.add("card-info");
  h3.classList.add("name");
  username1.classList.add("username");

  card1.appendChild(img);
  card1.appendChild(cardInfo);
  cardInfo.appendChild(h3);
  cardInfo.appendChild(username1);
  cardInfo.appendChild(location1);
  cardInfo.appendChild(profile1);
  profile1.appendChild(link);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  img.src = obj.avatar_url;
  h3.textContent = obj.name;
  username1.textContent = obj.login;
  location1.textContent = obj.location;
  link.href = obj.html_url;
  link.textContent = obj.html_url;
  followers.textContent = obj.followers;
  following.textContent = obj.following;

  return card1;
}
