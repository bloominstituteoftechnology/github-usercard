/* initial edit
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/leon-nasswetter 
*/
import axios from "axios";

// const myInfo = axios.get("https://api.github.com/users/leon-nasswetter")

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

function cardMaker(object){
  const card = document.createElement("div");
  const imgURL = document.createElement("img");
  const cardInfo = document.createElement("div");
  const userName = document.createElement("h3");
  const userUserName = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const userLink = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  card.appendChild(imgURL);
  card.appendChild(cardInfo);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(userUserName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(userLink);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  card.classList.add("card");
  cardInfo.classList.add("card-info");
  userName.classList.add("name");
  userUserName.classList.add("username");

  imgURL.src = object.avatar_url;
  userName.textContent = object.name;
  userUserName.textContent = object.login;
  location.textContent = object.location;
  followers.textContent = object.followers;
  following.textContent = object.following;
  bio.textContent = object.bio;

  return card;
}
const followersArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];


const cardLocation = document.querySelector(".cards");

axios.get(`https://api.github.com/users/leon-nasswetter`)
    .then(data => {
      const newCard = cardMaker(data.data);
      cardLocation.appendChild(newCard);
    })
    .catch(error => {
      console.log("error", error);
    })

followersArray.forEach(name => {
  axios.get(`https://api.github.com/users/${name}`)
    .then(data => {
      const followCards = cardMaker(data.data);
      cardLocation.appendChild(followCards);
    })
    .catch(error => {
      console.log("error", error);
    })
})


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
