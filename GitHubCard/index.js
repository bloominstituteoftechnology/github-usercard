/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from "axios";
axios
	.get("https://api.github.com/users/hanselviva")
	.then((theData) => console.log("Here's the data: \n", theData))
	.catch();

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
const cardDiv = document.querySelector(".cards");

let endpoint = "hanselviva";
axios.get(`https://api.github.com/users/${endpoint}`).then((res) => {
	cardDiv.appendChild(divMaker(res));
});

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

followersArray.forEach((name) => {
	endpoint = name;
	axios.get(`https://api.github.com/users/${endpoint}`).then((res) => {
		cardDiv.appendChild(divMaker(res));
	});
});

// followersArray.forEach((name) => appendingUserCards(name));

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
function divMaker(obj) {
	const parentDiv = document.createElement("div");
	parentDiv.classList.add("card");

	const photo = document.createElement("img");
	photo.setAttribute("src", obj.data.avatar_url);
	parentDiv.appendChild(photo);

	const cardInfoDiv = document.createElement("div");
	cardInfoDiv.classList.add("card-info");
	parentDiv.appendChild(cardInfoDiv);

	const nameOfUser = document.createElement("h3");
	nameOfUser.classList.add("name");
	nameOfUser.textContent = obj.data.name;
	cardInfoDiv.appendChild(nameOfUser);

	const userName = document.createElement("p");
	userName.classList.add("username");
	userName.textContent = obj.data.login;
	cardInfoDiv.appendChild(userName);

	const location = document.createElement("p");
	location.textContent = obj.data.location;
	cardInfoDiv.appendChild(location);

	const profile = document.createElement("p");
	cardInfoDiv.appendChild(profile);

	const profileLink = document.createElement("a");
	profileLink.textContent = obj.data.html_url;
	profile.appendChild(profileLink);

	const followers = document.createElement("p");
	followers.textContent = obj.data.followers;
	cardInfoDiv.appendChild(followers);

	const following = document.createElement("p");
	following.textContent = obj.data.following;
	cardInfoDiv.appendChild(following);

	const bio = document.createElement("p");
	bio.textContent = obj.data.bio;
	cardInfoDiv.appendChild(bio);

	return parentDiv;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
