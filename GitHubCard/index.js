/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get("https://api.github.com/users/vasilii-garanin")
    .then(
        response =>
        {
            console.log("response");
        })
    .catch(error =>
    {
        console.log("error");
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

const followersArray = ["anastasia-lapteva"];
const FollowingArray = ["BrityHemming", "austenallred", "tetondan", "dustinmyers", "justsml"];
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
const card = document.querySelector("div");
const cardImg = document.querySelector("img");
const cardInfo = document.querySelector('div');
const cardInfoName = document.querySelector("h3");
const cardInfoUserName = document.querySelector("p");
const cardInfoLocation = document.querySelector("p");
const cardInfoProfile = document.querySelector("p");
const cardInfoProfileUrl = document.querySelector("a");
const cardInfoFollowers = document.querySelector("p");
const cardInfoFollowing = document.querySelector("p");
const cardInfoBio = document.querySelector("p");

card.classList.add("card");
cardImg.src = data["avatar_url"];
cardInfo.classList.add("card-info");
cardInfoName.classList.add("name");
cardInfoUserName.classList.add("username");
cardInfoName.textContent = data["name"];
cardInfoLocation.textContent = data["location"];
cardInfoProfileUrl.href = `Location:${data["location"]}`;
cardInfoProfile.textContent = "Profile: ";
cardInfoProfileUrl.href = data["html_url"];
cardInfoProfileUrl.textContent = data["html_url"];
cardInfoFollowers.textContent = `Followers: ${data["followers"]}`;
cardInfoFollowing.textContent = `Following: ${data["following"]}`;
cardInfoBio.textContent = data["bio"];


card.appendChild(cardImg);
card.appendChild(cardInfo);
cardInfo.appendChild(cardInfoName);
cardInfo.appendChild(cardInfoUserName);
cardInfo.appendChild(cardInfoLocation);
cardInfo.appendChild(cardInfoProfile);
cardInfoProfile.appendChild(cardInfoProfileUrl);
cardInfo.appendChild(cardInfoFollowers);
cardInfo.appendChild(cardInfoFollowing);
cardInfo.appendChild(cardInfoBio);












/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
