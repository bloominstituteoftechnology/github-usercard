import axios from "axios";
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const myData = axios.get("https://api.github.com/users/Malekkos")
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/
console.log(myData);
// Things to be added on the card 
// Real Name and username ---------------------------------------- object.data.login & object.data.name
// Location ------------------------------------------------------ object.data.location
// a Link to my profile eg. https://github.com/Malekkos ---------- object.data.html_url
// followers as well as who im following (both are zero); -------- object.data.followers  &  object.data.following
// bio ----------------------------------------------------------- object.data.bio

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
function userCardCreator (obj) {
  const container = document.createElement("div");
  const profilePicture = document.createElement("img");
  const cardInfoContainer = document.createElement("div");
  const realName = document.createElement("h3");
  const userName = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const profAddress = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");
  container.classList = "card";
  cardInfoContainer.classList = "card-info";
  realName.classList = "name";
  userName.classList = "username";
  profilePicture.src = obj.name.avatar_url;
  realName.textContent = obj.data.name;
  userName.textContent = obj.data.login;
  location.textContent = `Location: ${obj.data.location}`;
  profile.textContent = "Profile:";
  profAddress.href = obj.data.url;
  profAddress.textContent = obj.data.url;
  followers.textContent = `Followers: ${obj.data.followers}`;
  following.textContent = `Following: ${obj.data.following}`;
  bio.textContent = `Bio: ${obj.data.bio}`;
  container.appendChild(profilePicture);
  container.appendChild(cardInfoContainer);
  cardInfoContainer.appendChild(realName)
  cardInfoContainer.appendChild(userName)
  cardInfoContainer.appendChild(location)
  cardInfoContainer.appendChild(profile)
  profile.appendChild(profAddress)
  cardInfoContainer.appendChild(followers)
  cardInfoContainer.appendChild(following)
  cardInfoContainer.appendChild(bio)
  return container;
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
