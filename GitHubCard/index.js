/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from "axios";

const result = axios.get("https://api.github.com/users/john-laubscher");


axios
.get("https://api.github.com/users/john-laubscher")
  console.log("1. here is the result", result)
.then((futureData) =>{
    console.log("2. here is future data", futureData)
  })
.catch((error) =>{
    console.log(error)
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
//#5 adding data to followers array---how do I request data for a user???---function will create the card and add it after I call it for the new array. Will I need to add new user data to the result array or call the new array?

const newArray = axios.get("https://api.github.com/users/john-laubscher");
followersArray.push("deG3nt3lm4n", "bgoonz", "esin", "Magicianred")


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
//creating element to append to
const cards = document.querySelector(".cards")
const creator = function cardCreator(cardObj) {

  //creating html
  const cardContainer = document.createElement("div");
  const img = document.createElement("img");
  const cardInfo = document.createElement("div");
  const realName = document.createElement("h3");
  const userName = document.createElement("p");
  const location = document.createElement("p");
  const profileContainer = document.createElement("p");
  const gitLink = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const userBio = document.createElement("p");
  
  //creating scaffolding
cardContainer.appendChild(img);
cardContainer.appendChild(cardInfo);
  cardInfo.appendChild(realName);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profileContainer);
    cardInfo.appendChild(gitLink);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(userBio);

  // adding classes
  cardContainer.classList.add("card");
  cardInfo.classList.add("card-info");
  realName.classList.add("name");
  userName.classList.add("username");

  //passing in values from the array
  img.textContent = cardObj.avatar_url
  realName.textContent = cardObj.name
  userName.textContent = cardObj.login
  location.textContent = cardObj.location
  gitLink.textContent = cardObj.html_url
  followers.textContent = cardObj.followers
  following.textContent = cardObj.following
  userBio.textContent = cardObj.bio

  console.log((img)
//returning new card
  const newCardObj = result.map((resultItem) => {       //what is this error over const?--what is a parsing error?
    console.log(newCardObj)
    return cardCreator(resultItem);


});
//iterating and appending to html
newCardObj.forEach((resultElement) => {
  cards.appendChild(resultElement);
})


}
cardCreator(result);


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
