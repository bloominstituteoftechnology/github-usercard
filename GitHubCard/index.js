/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const parentComp = document.querySelector(".cards");

const followersArray = [
  `tetondan`,
  `dustinmyers`,
  `justsml`,
  `luishrd`,
  `bigknell`,
];

axios
  .get("https://api.github.com/users/bgfranks")
  .then(res => {
    // console.log(res.data);
    const newCard = ghCard(res.data);
    parentComp.appendChild(newCard);
  })
  .catch(err => {
    console.log("the data was not returned", err);
  });

followersArray.forEach(event => {
  axios.get(`https://api.github.com/users/${event}`).then(res => {
    const cardRes = ghCard(res.data);
    const allCards = document.querySelector(".cards");
    parentComp.appendChild(cardRes);
  });
});

function ghCard(ghUser) {
  // Creating Elements
  const card = document.createElement("div");
  const cardImg = document.createElement("img");
  const cardInfo = document.createElement("div");
  const name = document.createElement("h3");
  const username = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const profileUrl = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  // Adding Classes
  card.classList.add("card");
  cardInfo.classList.add("card-info");
  name.classList.add("name");
  username.classList.add("username");

  // Element Content
  cardImg.src = ghUser.avatar_url;
  name.textContent = ghUser.name;
  username.textContent = ghUser.username;
  location.textContent = `Location: ${ghUser.location}`;
  profileUrl.href = ghUser.html_url;
  profileUrl.textContent = ghUser.html_url;
  profileUrl.target = "_blank";
  profile.textContent = `Profile: `;
  followers.textContent = `Followers: ${ghUser.followers}`;
  following.textContent = `Following: ${ghUser.following}`;
  bio.textContent = ghUser.bio;

  // Appending Children
  card.appendChild(cardImg);
  card.appendChild(cardInfo);

  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  profile.appendChild(profileUrl);

  // Return Card
  return card;
}
