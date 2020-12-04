/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from "axios";

axios
  .get("https://api.github.com/users/Anthony-Cortese")
  .then((futureData) => {
    const git = myCard(futureData.data);
    const card = document.querySelector(".cards");

  })
  .catch((err) => {
    console.log(err, "this is not working");
  })
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
function myCard (data) {
  const card = document.createElement("div");
  const newImage = document.createElement("img");
  const info = document.createElement("div");
  const newName = document.createElement("h3");
  const userName = document.createElement("p");
  const newLocation = document.createElement("p");
  const newProfile = document.createElement("p");
  const address = document.createElement("a")
  const newFollowers = document.createElement("p");
  const newFollowing = document.createElement("p");
  const newBio = document.createElement("p");

  card.classList.add("card");
  info.classList.add("card-info");
  newName.classList.add("name");
  userName.classList.add("username");
  newImage.src = data.avatar_url;
  address.href = data.url; 
  
  newName.textContent = data.name;
  userName.textContent = data.login;
  newLocation.textContent = data.location;
  newProfile.textContent = "profile"
  address.textContent = data.url;
  newFollowers.textContent = data.followers;
  newFollowing.textContent = data.following;
  newBio.textContent = data.bio;

  card.appendChild(newImage);
  card.appendChild(info);
  info.appendChild(newName);
  info.appendChild(userName);
  info.appendChild(newLocation);
  info.appendChild(newProfile);
  newProfile.appendChild(address)
  info.appendChild(newFollowers);
  info.appendChild(newFollowing);
  info.appendChild(newBio);

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
