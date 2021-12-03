import axios from "axios";

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const divCards = document.querySelector(".cards");

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
];

followersArray.forEach((user) => {
  axios
    .get(`https://api.github.com/users/${user}`)
    .then((resp) => {
      console.log(resp.data);
      const githubCards = githubCard(resp.data);
      console.log(githubCards);
      divCards.appendChild(githubCards);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(console.log("Woo"));
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

function githubCard(obj) {
  const card = document.createElement("div");
  const imageOfUser = document.createElement("img");
  const cardInfo = document.createElement("div");
  const nameOfUser = document.createElement("h3");
  const usernameInfo = document.createElement("p");
  const userLocation = document.createElement("p");
  const profileInfo = document.createElement("p");
  const usersGithubLink = document.createElement("p");
  const numberOfFollowers = document.createElement("p");
  const followingNumber = document.createElement("p");
  const bioOfUser = document.createElement("p");

  card.appendChild(imageOfUser);
  card.appendChild(cardInfo);
  cardInfo.appendChild(nameOfUser);
  cardInfo.appendChild(usernameInfo);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(profileInfo);
  profileInfo.appendChild(usersGithubLink);
  cardInfo.appendChild(numberOfFollowers);
  cardInfo.appendChild(followingNumber);
  cardInfo.appendChild(bioOfUser);

  card.classList.add("card");
  cardInfo.classList.add("card-info");
  nameOfUser.classList.add("name");
  usernameInfo.classList.add("username");

  imageOfUser.src = obj.avatar_url;
  nameOfUser.textContent = obj.name;
  usernameInfo.textContent = obj.login;
  userLocation.textContent = `Location: ${obj.location}`;
  profileInfo.textContent = "Profile";
  usersGithubLink.href = obj.url;
  usersGithubLink.textContent = obj.url;
  numberOfFollowers.textContent = obj.followers;
  followingNumber.textContent = obj.following;
  bioOfUser.textContent = obj.bio;

  return card;
}
