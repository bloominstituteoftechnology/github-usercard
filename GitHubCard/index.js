import axios from "axios";

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

function cardMaker(data) {
  const cardHolder = document.querySelector(".cards");
  const mainCard = document.createElement("div");

  const cardImage = document.createElement("img");
  console.log(data);
  cardImage.setAttribute("src", data["avatar_url"]);
  mainCard.append(cardImage);

  const cardInfo = document.createElement("div");

  const cardName = document.createElement("h3");
  cardName.textContent = data["name"];

  const cardUserName = document.createElement("p");
  cardUserName.textContent = data["login"];
  mainCard.append(cardUserName);
  const cardLocation = document.createElement("p");
  cardLocation.textContent = data["location"];
  mainCard.append(cardLocation);
  const profileAddress = document.createElement("a");
  profileAddress.setAttribute("src", "url");
  mainCard.append(profileAddress);
  const profileFollowers = document.createElement("p");
  profileFollowers.textContent = data["followers"];
  mainCard.append(profileFollowers);
  const profileFollowing = document.createElement("p");
  profileFollowing.textContent = data["following"];
  mainCard.append(profileFollowing);
  const profileBio = document.createElement("p");
  profileBio.textContent = data["bio"];
  mainCard.append(profileBio);
  cardHolder.append(mainCard);
}

axios.get(`https://api.github.com/users/JamariaSims`).then((response) => {
  cardMaker(response.data);
});
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

    <div class="card"> 1
      <img src={image url of user} />
      <div class="card-info"> 2
        <h3 class="name">{users name}</h3> 2-1
        <p class="username">{users user name}</p> 2-2
        <p>Location: {users location}</p> 2-3
        <p>Profile: 2-4
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p> 2-5
        <p>Following: {users following count}</p> 2-6
        <p>Bio: {users bio}</p> 2-7
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
