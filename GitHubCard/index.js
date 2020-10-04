import axios from "axios";

axios
    .get("https://api.github.com/users/justin-mavity")
    .then((res) => {
        const user = res.data
        console.log(user);
        const newCard = cardMaker({
            user: user
        });
        document.querySelector(".cards").append(newCard);
    })
    .catch((err) => {
        console.log(err);
    });
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

const followersArray = ["tetondan", "dustinmyers", "luishrd", "bigknell"];

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

function cardMaker({
    user
}) {
    const card = document.createElement("div"),
        image = document.createElement("img"),
        cardInfo = document.createElement("div"),
        name = document.createElement("h3"),
        username = document.createElement("p"),
        location = document.createElement("p"),
        profile = document.createElement("p"),
        userAddress = document.createElement("a"),
        followers = document.createElement("followers"),
        following = document.createElement("following"),
        bio = document.createElement("p");

    card.classList.add("card");
    image.src = user.avatar_url;
    cardInfo.classList.add("card-info");
    name.classList.add("name");
    username.classList.add("username");
    userAddress.href = user.html_url;

    name.textContent = user.name;
    username.textContent = user.login;
    location.textContent = "Location: " + user.location;
    profile.textContent = userAddress;
    followers.textContent = 'Followers: ' + user.followers;
    following.textContent = 'Following: ' + user.following;
    bio.textContent = 'Bio: ' + user.bio;

    card.appendChild(image);
    card.appendChild(cardInfo);
    cardInfo.appendChild(name);
    cardInfo.appendChild(username);
    cardInfo.appendChild(location);
    cardInfo.appendChild(profile);
    cardInfo.appendChild(followers);
    cardInfo.appendChild(following);
    cardInfo.appendChild(bio);
    profile.appendChild(userAddress);

    userAddress.addEventListener("click", () => {
        console.log(card);
    });
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