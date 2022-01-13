import axios from "axios";
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const getRequest = axios.get("https://api.github.com/users/dbvker");

console.log(getRequest);

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

const followersArray = [
  'dbvker',
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell',
  'acakebaker'
];

followersArray.forEach(user => {
  axios.get(`https://api.github.com/users/${user}`)
.then(resp => {
  const user = cardUI(resp.data);
  document.querySelector(".cards").appendChild(user);
}).catch(error => {
  console.error(error);
}).finally(
  console.log(`It worked`)
)
})

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

const cardUI = (obj) => {
  // Create DOM Elements
  const card = document.createElement("div");
  const cardImg = document.createElement("img");
  const cardInfo = document.createElement("div");
  const cardTitle = document.createElement("h3");
  const cardUserName = document.createElement("p");
  const cardLocation = document.createElement("p");
  const cardProfile = document.createElement("p");
  const cardProfileLink = document.createElement("a");
  const cardFollowers = document.createElement("p");
  const cardFollowing = document.createElement("p");
  const cardBio = document.createElement("p");

  // Add CSS Styling
  card.classList.add("card");
  cardInfo.classList.add("card-info");
  cardTitle.classList.add("name")

  // Add Element Content
  cardImg.src = obj.avatar_url;
  cardTitle.textContent = obj.name;
  cardUserName.textContent = obj.login;
  cardLocation.textContent = `Location: ${obj.location}`;
  cardProfile.textContent = `Profile: `;
  cardProfileLink.href = obj.url;
  cardProfileLink.textContent = obj.html_url;
  cardFollowers.textContent = `Followers: ${obj.followers}`;
  cardFollowing.textContent = `Following: ${obj.following}`;
  cardBio.textContent = `Bio: ${obj.bio}`;


  // Appending Elements
  card.append(cardImg);
  card.append(cardInfo);
    cardInfo.append(cardTitle);
    cardInfo.append(cardUserName);
    cardInfo.append(cardLocation);
    cardInfo.append(cardProfile);
      cardProfile.append(cardProfileLink);
    cardInfo.append(cardFollowers);
    cardInfo.append(cardFollowing);
    cardInfo.append(cardBio);

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
