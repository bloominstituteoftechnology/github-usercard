// Import dependencies
import axios from "axios";
import { gsap } from "gsap";
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const gitUserName = "chriselles";
const APIUrl = `https://api.github.com/users/${gitUserName}`;
const getGitData = axios.get(APIUrl);
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function
    Skip to STEP 3.
*/
getGitData.then((res) => {
  // console.log for inspecting returned data
  console.log("Data returned", res);
});
/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
getGitData
  .then((res) => {
    const cardParent = document.querySelector(".cards");
    const cardMakerFunction = cardMaker(res.data);

    cardParent.prepend(cardMakerFunction);
  })
  .catch((err) => console.log(err));
/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.
    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

// Get followers data
const APIUrlFollowers = `https://api.github.com/users/${gitUserName}/followers`;
const getFollowersData = axios.get(APIUrlFollowers);
getFollowersData
  .then((res) => {
    // Save user data in variable
    const followersArray = res.data;
    // Get parent div to append 
    const cardParent = document.querySelector(".cards");
    // Add followers title heading
    const followersTitle = document.createElement("h2");
    followersTitle.textContent = "Followers";
    followersTitle.classList.add("followers-heading");
    cardParent.appendChild(followersTitle);
    // Loop through all followers data
    followersArray.forEach((user) => {
      // Get new promise for each user
      const newURL = user.url;
      // Use data to insert to DOM
      axios.get(newURL).then((userData) => {
        const cardMakerFunction = cardMaker(userData.data);
        cardParent.appendChild(cardMakerFunction);
      });
    });
  })
  .catch((err) => console.log(err));
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
function cardMaker(user) {
  // Create main container
  const cardContainer = document.createElement("div");
  // Add attributes to main container
  cardContainer.classList.add("card");
  // Create image element
  const userImg = document.createElement("img");
  // Add source image to image element
  userImg.src = user.avatar_url;
  // Create elements for card info
  const cardInfoContainer = document.createElement("div");
  const cardName = document.createElement("h3");
  const cardUserName = document.createElement("p");
  const cardLocation = document.createElement("p");
  const cardProfile = document.createElement("p");
  const cardFollowers = document.createElement("p");
  const cardFollowing = document.createElement("p");
  const cardBio = document.createElement("p");
  const expandBtn = document.createElement("button");
  const cardContributions = document.createElement("div");
  // Add attributes to card info elements
  cardInfoContainer.classList.add("card-info");
  cardName.classList.add("name");
  cardUserName.classList.add("username");
  cardContributions.classList.add("contributions");
  expandBtn.classList.add("expandBtn");
  // Add content to card-info elements
  cardName.textContent = user.name;
  cardUserName.textContent = user.login;
  cardLocation.textContent = `Location: ${user.location}`;
  cardProfile.textContent = "Profile: ";
  cardFollowers.textContent = `Followers: ${user.followers}`;
  cardFollowing.textContent = `Following: ${user.following}`;
  cardBio.textContent = `Bio: ${user.bio}`;
  GitHubCalendar(cardContributions, user.login, { responsive: true });
  expandBtn.textContent = "Click to Expand";
  // Create xtra inner HTML elements for certain pieces of info on the card info elements
  const cardProfileURL = document.createElement("a");
  // Add content to the profile link element and insert into profile element
  cardProfileURL.textContent = user.html_url;
  cardProfileURL.setAttribute("href", user.html_url);
  cardProfileURL.setAttribute("target", "_blank");
  cardProfile.appendChild(cardProfileURL);
  // Insert all necessary children into card info
  const cardInfoChildren = [
    cardName,
    cardUserName,
    cardLocation,
    cardProfile,
    cardFollowers,
    cardFollowing,
    cardBio,
  ];
  cardInfoChildren.forEach((element) => {
    cardInfoContainer.appendChild(element);
  });
  // Insert all necessary children into main card container
  const mainCardChildren = [userImg, cardInfoContainer, expandBtn, cardContributions];
  mainCardChildren.forEach((element) => {
    cardContainer.appendChild(element);
  });
  // Add event listener to expand button
  expandBtn.addEventListener("click", (e) => {
    cardContributions.classList.toggle("active");
    expandBtn.textContent = cardContributions.classList.contains("active")
      ? "Click to Collapse"
      : "Click to Expand";
    if (cardContributions.classList.contains("active")) {
      gsap.to(cardContributions, { opacity: 1, height: "auto", x: 0, duration: 1 });
    } else {
      gsap.to(cardContributions, { opacity: 0, height: 0, x: -100, duration: 1 });
    }
  });
  // Return entire card element
  return cardContainer;
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

/********************************************
 * Add some animation effects to loading site
 ********************************************/
window.addEventListener("load", function () {
  gsap.from(".header", { opacity: 0, y: -50, duration: 0.5 });
  gsap.from(".cards", { opacity: 0, y: 50, duration: 0.5 });
});