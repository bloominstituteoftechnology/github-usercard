const { default: axios } = require("axios");

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get("https://api.github.com/users/abelmore33")
.then(res => {
  console.log(res)
})

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
const userCard = (obj) => {
  //Elements
  const cardWrapper = document.createElement('div');
  const imageUrl = document.createElement('img');
  const cardInfoDiv = document.createElement('div');
  const name = document.createElement('h3');
  const username = document.createElement('p');
  const userLocation = document.createElement('p');
  const profileText = document.createElement('p');
  const userAddress = document.createElement('a');
  const userFollowers = document.createElement('p');
  const userFollowing = document.createElement('p');
  const userBio = document.createElement('p');
  //Classes
  cardWrapper.classList.add('card');
  cardInfoDiv.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');
  //Text Content
  // imageUrl.src = obj.avatar_url;
  // name.textContent = obj.name;
  // username.textContent = obj.login;
  // userLocation.textContent = obj.location;
  // profileText.textContent = "Profile:";
  // userAddress.textContent = obj.html_url;
  // userFollowers.textContent = `Followers: ${obj.followers}`;
  // userFollowing.textContent = `Following: ${obj.following}`;
  //Append 
  cardWrapper.appendChild(imageUrl);
  cardWrapper.appendChild(cardInfoDiv);
  cardInfoDiv.appendChild(name);
  cardInfoDiv.appendChild(username);
  cardInfoDiv.appendChild(userLocation);
  cardInfoDiv.appendChild(profileText);
  profileText.appendChild(userAddress);
  cardInfoDiv.appendChild(userFollowers);
  cardInfoDiv.appendChild(userFollowing);
  cardInfoDiv.appendChild(userBio);
  console.log(cardWrapper)

}
userCard();
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
