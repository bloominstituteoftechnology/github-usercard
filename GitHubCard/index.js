import axios from "axios";
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

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
   axios
     .get(`https://api.github.com/users/${person}`)
     .then((res) => {
       const info = res.data;
       return gitHubCard(info);
     })
     .catch((err) => {
       console.log(err);
     });
 });
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
axios
  .get("https://api.github.com/users/TheGitHubFiles")
  .then((res) => {
    const info = res.data;
    return gitHubCard(info);
  })
  .catch((err) => {
    console.log(err);
  });

function gitHubCard(object) {
  const gitCard = document.createElement("div");
  const gitImage = document.createElement("img");
  const gitCardInfo = document.createElement("div");
  const gitName = document.createElement("h3");
  const gitUserName = document.createElement("p");
  const gitLocation = document.createElement("p");
  const gitProfile = document.createElement("p");
  const gitAddress = document.createElement("a");
  const gitFollowers = document.createElement("p");
  const gitFollowing = document.createElement("p");
  const gitBio = document.createElement("p");

  gitCard.classList.add("card");
  gitCardInfo.classList.add("card-info");
  gitName.classList.add("name");
  gitUserName.classList.add("username");

  gitImage.src = object.avatar_url;
  gitAddress.href = object.html_url;
  gitAddress.textContent = "here is my html";
  gitName.textContent = `Name: ${object.name}`;
  gitUserName.textContent = object.login;
  gitLocation.textContent = `Location: ${object.location}`;
  gitFollowers.textContent = `Followers: ${object.followers}`;
  gitFollowing.textContent = `Following: ${object.following}`;
  gitBio.textContent = `Bio: ${object.bio}`;
  gitProfile.textContent = "Profile:";

  gitCard.appendChild(gitImage);
  gitCard.appendChild(gitCardInfo);
  gitCardInfo.appendChild(gitName);
  gitCardInfo.appendChild(gitUserName);
  gitCardInfo.appendChild(gitLocation);
  gitCardInfo.appendChild(gitProfile);
  gitProfile.appendChild(gitAddress);
  gitCardInfo.appendChild(gitFollowers);
  gitCardInfo.appendChild(gitFollowing);
  gitCardInfo.appendChild(gitBio);

  const cardPlace = document.querySelector(".cards");
  return cardPlace.appendChild(gitCard);
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
