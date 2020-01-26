/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/


// axios.get ("https://api.github.com/users/robinson86")
//   .then(function(response) {
//     console.log("response", response)
//     console.log("cards", cards)
//     cards.appendChild(createUser(response.data)); 
    
//   })
//   .catch(function(error){

//   })
//   .then(function () {

//   });
 

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


const followersArray = ["robinson86","tetondan","dustinmyers","justsml","luishrd","bigknell"];
followersArray.forEach(followersName => {
  axios.get ("https://api.github.com/users/" + followersName)
  .then(function(response) {
    cards.appendChild(createUser(response.data)); 
    
  })
  .catch(function(error){

  })
  .then(function () {

  });
});

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
const cards = document.querySelector(".cards")

function createUser(data)  {
  const card = document.createElement("div");
  const img = document.createElement("img");
  img.src = data.avatar_url;
  const cardInfo = document.createElement("div");
  const name = document.createElement("h3");
  name.textContent = data.login;
  const userName = document.createElement("p");
  userName.textContent = data.login;
  const location = document.createElement("p");
  location.textContent = data.location;
  const profile = document.createElement("p");
  const address = document.createElement("a");
  address.textContent = data.html_url;
  address.href = data.html_url;
  const userFollowers = document.createElement("p");
  userFollowers.textContent = data.followers_url;
  const userFollowing = document.createElement("p");
  userFollowing.textContent = data.following_url;
  const userBio = document.createElement("p");
  userBio.textContent = data.bio;

  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(address);
  cardInfo.appendChild(userFollowers);
  cardInfo.appendChild(userFollowing);
  cardInfo.appendChild(userBio);

  card.classList.add("card");
  cardInfo.classList.add("card-info");
  name.classList.add("name");
  userName.classList.add("username");

  console.log("card", card)
  return card;

}



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
