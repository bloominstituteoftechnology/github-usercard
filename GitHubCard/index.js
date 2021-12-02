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

function cardMaker(obj) {
  const card = document.createElement("div");
  const imgUrl = document.createElement("img");
  const cardInfo = document.createElement("div");
  const name = document.createElement("h3");
  const username = document.createElement("p");
  const usersLocation = document.createElement("p");
  const usersProfile = document.createElement("p");
  const githubAddress = document.createElement("a");
  const followersCount = document.createElement("p");
  const followingCount = document.createElement("p");
  const usersBio = document.createElement("p");

  card.appendChild(imgUrl);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(usersLocation);
  cardInfo.appendChild(usersProfile);

  cardInfo.appendChild(followersCount);
  cardInfo.appendChild(followingCount);
  cardInfo.appendChild(usersBio);

  card.classList.add("card");
  cardInfo.classList.add("card-info");
  name.classList.add("name");
  username.classList.add("username");

  imgUrl.src = obj.avatar_url;
  name.textContent = obj.name;
  username.textContent = obj.login;
  usersLocation.textContent = `Location: ${obj.location}`;
  githubAddress.setAttribute("href", `${obj.html_url}`);
  githubAddress.textContent = `${obj.html_url}`;
  usersProfile.textContent = `Profile:`;
  usersProfile.appendChild(githubAddress);
  followersCount.textContent = `Followers: ${obj.followers}`;
  followingCount.textContent = `Following: ${obj.following}`;
  usersBio.textContent = `Bio : ${obj.bio}`;

  return card;
}
axios
  .get("https://api.github.com/users/Berenika14")
  .then((response) =>
    document.querySelector(".cards").appendChild(cardMaker(response.data))
  )
  .catch((error) => {
    console.error(error);
  });

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
