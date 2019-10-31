/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 
   Skip to Step 3.
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

const followersArray = [
"Thestartofyou", 
"leachcoding", 
"phil-mac", 
"bseverino", 
"squashgray"
];
///// followers Array to make this work
followersArray.forEach(follower => {
  axios
    .get(`https://api.github.com/users/${follower}`)
    .then(response => {
      console.log(response.data);

      cardContainer.appendChild(createCards(response.data));
    })
});

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:
///cards is the container
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

const cardContainer = document.querySelector(".cards");

const promise = axios.get("https://api.github.com/users/Thestartofyou");

promise
  .then(response => {
    console.log("yo", response.data);
    let cards = document.querySelectorAll(".cards");
    let card = createCards(response.data);
    console.log(card);
    cards.appendChild(card);
  })

  .catch(error => {
    console.log("API boi", error);
  });

////function
function createCards(userObject) {
  ///create elements
  const card = document.createElement("div");
  const imgs = document.createElement("img");
  const cardInfo = document.createElement("div");
  const name = document.createElement("h3");
  const userName = document.createElement("p");
  const profile = document.createElement("p");
  const profileLink = document.createElement("a");
  const location = document.createElement("p");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  ////appendChild
  card.appendChild(imgs);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(profile);
  profile.appendChild(profileLink);
  cardInfo.appendChild(location);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  //set styles
  card.classList.add("card");
  imgs.src = userObject.avatar_url;
  cardInfo.classList.add("card-info");
  name.classList.add("name");
  userName.classList.add("username");
  profileLink.href = userObject.html_url;

  ///set content
  userName.textContent = userObject.login;
  name.textContent = userObject.name;
  location.textContent = `Location: ${userObject.location}`
  profileLink.textContent = userObject.html_url;
  profile.textContent = `Profile: ${profileLink} `;
  followers.textContent = `Followers: ${userObject.followers}`;
  following.textContent = `Following: ${userObject.following}`;
  bio.textContent = `Bio: ${userObject.bio}`

  return card;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/