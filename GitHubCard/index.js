/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get("https://api.github.com/users/collerhatguy")
  .then(res => res.data)
  .then(data => console.log(data))
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
const container = document.querySelector(".cards");
axios.get("https://api.github.com/users/collerhatguy")
  .then(res => res.data)
  .then(data => createCard(data))
  .then(card => container.append(card))
/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/
function iterate(name) {
  axios.get(`https://api.github.com/users/${name}`)
  .then(res => res.data)
  .then(data => createCard(data))
  .then(card => container.append(card))
}
const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"
];

followersArray.forEach(follower => iterate(follower))
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
function createCard(obj) {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardImg = document.createElement("img");
  cardImg.src = obj.avatar_url;

  const cardInfo = document.createElement("div")
  cardInfo.classList.add("card-info");

  const name = document.createElement("h3");
  name.classList.add("name");
  name.innerText = obj.name;

  const username = document.createElement("p");
  username.classList.add("username");
  username.innerText = obj.login;

  const location = document.createElement("p");
  location.innerHTML = `Loaction: ${obj.location}`;

  const profile = document.createElement("p");
  profile.innerHTML = `Profile: <a href="${obj.url}">${obj.url}<a>`;

  const followers = document.createElement("p");
  followers.innerText = `Followers: ${obj.followers}`;

  const following = document.createElement("p");
  following.innerText = `Followers: ${obj.following}`;

  const bio = document.createElement("p");
  bio.innerText = `Followers: ${obj.bio}`;
  cardInfo.append(name, username, location, profile, followers, following)
  card.append(cardImg, cardInfo);
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
