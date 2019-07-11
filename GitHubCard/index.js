/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const data = axios
  .get("https://api.github.com/users/francoiscoding", {})
  .then(response => {
    const info = response.data;
    const holder = [];
    holder.push(info);
    holder.forEach(data => {
      card(data);
    });
  })
  .catch(e => {
    console.log("error", e);
  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
const newComponent = document.createElement("main");
const cards = document.querySelector(".cards");

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const data2 = axios
  .get("https://api.github.com/users/francoiscoding/followers", {})
  .then(response => {
    const info = response.data;
    const holder = [];
    holder.push(info);
    holder.forEach(data => {
      followersArray.push(data);
    });
  })
  .catch(e => {
    console.log("error", e);
  });
var followersArray = [];
followersArray.forEach(follower => card(follower));
console.log(followersArray);

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
function card(data) {
  // Created Card Div
  var cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  // Created Img
  var newImg = document.createElement("img");
  newImg.src = data.avatar_url;
  cardDiv.appendChild(newImg);

  // Created Card-Info Div
  var cardInfoDiv = document.createElement("div");
  cardInfoDiv.classList.add("card-info");
  cardDiv.appendChild(cardInfoDiv);

  // Created H3
  var h3 = document.createElement("h3");
  h3.textContent = data.name;
  h3.classList.add("name");
  cardInfoDiv.appendChild(h3);

  // Username Paragraph
  var userP = document.createElement("p");
  userP.textContent = data.login;
  userP.classList.add("username");
  cardInfoDiv.appendChild(userP);

  // Location Paragraph
  var locationP = document.createElement("p");
  locationP.textContent = `Location : ${data.location}`;
  cardInfoDiv.appendChild(locationP);

  // Profile Paragraph
  var profileP = document.createElement("p");
  var link = document.createElement("a");
  profileP.textContent = `Link : ${data.html_url}`;
  link.href = data.html_url;
  link.append(profileP);
  cardInfoDiv.appendChild(profileP);

  // Followers Paragraph
  var followersP = document.createElement("p");
  followersP.textContent = `Followers : ${data.followers}`;
  cardInfoDiv.appendChild(followersP);

  // Following Paragraph
  var followingP = document.createElement("p");
  followingP.textContent = `Following : ${data.following}`;
  cardInfoDiv.appendChild(followingP);

  // Bio Paragraph
  var bioP = document.createElement("p");
  bioP.textContent = `Bio : ${data.bio}`;
  cardInfoDiv.appendChild(bioP);

  // Append Div to Page
  cards.appendChild(cardDiv);
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
// Pull request
