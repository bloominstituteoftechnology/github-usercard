/* Step 1: using axios, send a GET request to the following URL -Done
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

function gitCard(data) {
  const freshCard = document.createElement("div"),
    freshImage = document.createElement("img"),
    freshCardInfo = document.createElement("div"),
    freshH3 = document.createElement("h3"),
    freshUsername = document.createElement("p"),
    freshLocation = document.createElement("p"),
    freshProfile = document.createElement("p"),
    freshFollowers = document.createElement("p"),
    freshFollowing = document.createElement("p"),
    freshBio = document.createElement("p"),
    freshAnchor = document.createElement("a");

  freshCard.appendChild(freshImage);
  freshCard.appendChild(freshCardInfo);
  freshCardInfo.appendChild(freshH3);
  freshCardInfo.appendChild(freshUsername);
  freshCardInfo.appendChild(freshLocation);
  freshProfile.appendChild(freshProfile);
  freshCardInfo.appendChild(freshFollowers);
  freshCardInfo.appendChild(freshFollowing);
  freshCardInfo.appendChild(freshBio);
  freshCardInfo.appendChild(freshAnchor);

  freshCard.classList.add("card");
  freshCard.classList.add("card-info");
  freshCard.classList.add("name");
  freshCard.classList.add("username");

  return freshCard;
}

axios.get("https://api.github.com/users/Camfunk").then(response => {
  //console.log(response);
  response.data.message.forEach(item => {});
});
/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
