import axios from "axios";

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const gitId = axios.get("https://api.github.com/users/brennenoconnor");

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
// Get followers and iterate and add create new card

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
function githubCard(gitInfo) {
  //find .cards and then Create the Elements
  const cards = document.querySelector(".cards");
  const card = document.createElement("div");
  const img = document.createElement("img");
  const cardInfo = document.createElement("div");
  const userHeading = document.createElement("h3");
  const username = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const address = document.createElement("a");
  const followers = document.createElement("p");
  const followersListElement = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  //Add class lists
  card.classList.add("card");
  cardInfo.classList.add("card-info");
  userHeading.classList.add("name");
  username.classList.add("username");

  //Attach all elements to cards and make sure h3 and p elements are nested in card info
  cards.appendChild(card);
  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(userHeading);
  cardInfo.appendChild(username);
  cardInfo.append(location);
  cardInfo.appendChild(profile);
  profile.appendChild(address);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(followersListElement);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  // Populate the users card with promise result
  gitInfo.then((response) => {
    img.src = response.data.avatar_url;
    userHeading.textContent = response.data.name;
    username.textContent = `Username: ${response.data.login}`;
    location.textContent = `Location: ${response.data.location}`;
    profile.textContent = `Profile: ${response.data.html_url}`;
    followers.textContent = `Followers: ${response.data.followers}`;
    following.textContent = `Following: ${response.data.following}`;
    bio.textContent = `Bio: ${response.data.bio}`;
  });
}

githubCard(gitId);

//List of followers
const followers = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];

// Get followers and iterate and add create new card
followers.forEach((follower) => {
  const gitData = axios.get(`https://api.github.com/users/${follower}`);
  githubCard(gitData);
});

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
