import axios from "axios";

const result = axios.get("https://api.github.com/users/tjackreece");
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
const entryPoint = document.querySelector(".cards");
const apiData = axios
	.get("https://api.github.com/users/tjackreece")
	.then((response) => {
		return response.data;
	})
	.then((data) => {
		const cardData = createCard(data);

		entryPoint.append(cardData);
	})
	.catch((error) => {
		console.log("something went wrong", error);
	});

const followersArray = [];
function createCard(obj) {
	let gitCard = document.createElement("div");
	let profileImage = document.createElement("img");
	let cardInfo = document.createElement("div");
	let nameOC = document.createElement("h3");
	let usernameOC = document.createElement("p");
	let locationOC = document.createElement("p");
	let profileOC = document.createElement("p");
	let profileLinkOC = document.createElement("a");
	let followersOC = document.createElement("p");
	let followingOC = document.createElement("p");
	let bioOC = document.createElement("p");

	gitCard.appendChild(profileImage);
	gitCard.appendChild(cardInfo);
	cardInfo.appendChild(nameOC);
	cardInfo.appendChild(usernameOC);
	cardInfo.appendChild(locationOC);
	cardInfo.appendChild(profileOC);
	profileOC.appendChild(profileLinkOC);
	cardInfo.appendChild(followersOC);
	cardInfo.appendChild(followingOC);
	cardInfo.appendChild(bioOC);

	gitCard.classList.add("card");
	cardInfo.classList.add("card-info");
	nameOC.classList.add("name");
	usernameOC.classList.add("username");

	profileImage.src = obj["avatar_url"];
	nameOC.innerText = obj["name"];
	usernameOC.innerText = obj["login"];
	locationOC.innerText = `Location: ${obj["location"]}`;
	profileOC.prepend("Profile:");
	profileLinkOC.href = obj["html_url"];
	profileLinkOC.innerText = obj["html_url"];
	followersOC.innerText = `Followers: ${obj["followers"]}`;
	followingOC.innerText = `Following: ${obj["following"]}`;
	bioOC.innerText = `Bio: ${obj["bio"]}`;
	// articleSecPara.textContent = obj.secondParagraph;
	// articleThiPara.textContent = obj.thirdParagraph;
	// button.innerText = "+";

	// button.addEventListener("click", (event) => {
	// 	button.classList.toggle("article-open");
	// });

	return gitCard;
}
console.log();
/*

  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:
f
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

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
const otherUsersofGit = [
	"tetondan",
	"dustinmyers",
	"justsml",
	"luishrd",
	"bigknell",
];
otherUsersofGit.forEach((index) => {
	const apiData = axios
		.get(`https://api.github.com/users/${index}`)
		.then((response) => {
			return response.data;
		})
		.then((data) => {
			const cardData = createCard(data);

			entryPoint.append(cardData);
		})
		.catch((error) => {
			console.log("something went wrong", error);
		});
});
