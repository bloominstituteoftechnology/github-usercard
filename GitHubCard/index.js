/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/amotor-AM
*/

const url = "https://api.github.com/users/amotor-AM";

// One thing we can do which nobody seems to remember is .then chaining. Using this method we render.catch obsolete as we instead add the fail condition inside the .then statement. We seperate the resolved and failed statements with a ,

// axios.get(url).then(({ data }) => {
//   createCard(data);
// }), ((err) => console.log(err))

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
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

function makeAPICall(name) {
  const url = "https://api.github.com/users/";
  name.forEach((person) => {
    axios.get(url + person).then(({ data }) => {
      createCard(data);
    });
  }),
    (err) => console.log(err);
}
const names = [
  "amotor-AM",
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
];

makeAPICall(names);

const followersArray = [];

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

function createCard(gitHubData) {
  //Creating the elements for the cards
  const card = document.createElement("div");
  card.classList.add("card");
  var img = document.createElement("img");
  const info = document.createElement("div");
  info.classList.add("card-info");
  var name = document.createElement("h3");
  name.classList.add("name");
  var username = document.createElement("p");
  username.classList.add("username");
  var location = document.createElement("p");
  var profile = document.createElement("p");
  var followers = document.createElement("p");
  var following = document.createElement("p");
  var bio = document.createElement("p");

  //Assigning the cards to info collected from axios
  img.src = gitHubData.avatar_url;
  console.log(img.src);
  name.textContent = gitHubData.name;
  console.log(name);
  username.textContent = gitHubData.login;
  console.log(username);
  location.textContent = gitHubData.location;
  console.log(location);
  profile.textContent = `Profile: ${gitHubData.html_url}`;
  console.log(profile);
  followers.textContent = gitHubData.followers;
  console.log(followers);
  following.textContent = gitHubData.following;
  console.log(following);
  bio.textContent = gitHubData.bio;
  console.log(bio);

  //Creating the nested layout of our elements
  cards.appendChild(card);
  card.appendChild(img);
  card.appendChild(info);
  info.appendChild(name);
  info.appendChild(username);
  info.appendChild(location);
  info.appendChild(profile);
  info.appendChild(followers);
  info.appendChild(following);
  info.appendChild(bio);

  return card;
}
