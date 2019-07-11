/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// select the main node to attach content too

const cards = document.querySelector(".cards");
//console.log("blackjack:", cards);

axios
  .get("https://api.github.com/users/johnschneider1")
  .then(reply => {
    // success here
    console.log("testing:", reply);
    const people = reply.data;
    const attach = createCard(people);
    cards.appendChild(attach);
  })
  // error/failure here
  .catch(error => {
    console.log("why wont you work", error);
  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
// const box = document.querySelector(".cards");

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

// const followersArray = [
//   "johnschneider1",
//   "tetondan",
//   "dustinmyers",
//   "justsml",
//   "luishrd",
//   "bigknell"
// ];

const followersArray = [];

axios
  .get("https://api.github.com/users/justsml/followers")
  .then(res => {
    console.log(res.data);
    res.data.forEach(name => {
      followersArray.push(name.login);
    });
  })
  .then(() => {
    followersArray.forEach(name => {
      axios.get(`https://api.github.com/users/${name}`).then(res => {
        const followers = createCard(res.data);
        cards.appendChild(followers);
      });
    });
  })
  .catch(err => {
    console.log("wrong", err);
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

function createCard(people) {
  //console.log("I am a person", people);
  //create the elements
  const card = document.createElement("div");
  const img = document.createElement("img");
  const cardInfo = document.createElement("div");
  const cardName = document.createElement("h3");
  const cardUserName = document.createElement("p");
  const cardLocation = document.createElement("p");
  const cardAddress = document.createElement("a");
  const cardProfile = document.createElement("p");
  const cardFollowers = document.createElement("p");
  const cardFollowing = document.createElement("p");
  const cardBio = document.createElement("p");

  // set class names

  card.classList.add("card");
  img.classList.add("img");
  cardInfo.classList.add("card-info");
  cardName.classList.add("name");
  cardUserName.classList.add("username");
  cardLocation.classList.add("location");
  cardProfile.classList.add("profile");
  cardFollowers.classList.add("followers");
  cardFollowing.classList.add("following");
  cardBio.classList.add("bio");

  // set content

  img.src = people.avatar_url;
  //console.log(img);
  cardName.textContent = people.name;
  //console.log(cardName);
  cardUserName.textContent = people.login;
  cardLocation.textContent = people.location;
  cardProfile.textContent = people.node_id;
  //console.log("im a profile", cardProfile);
  cardFollowers.textContent = people.followers_url;
  cardFollowing.textContent = people.following_url;
  cardBio.textContent = people.bio;

  // setup structure of elements

  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(cardName);
  cardInfo.appendChild(cardUserName);
  cardInfo.appendChild(cardLocation);
  cardInfo.appendChild(cardProfile);
  cardInfo.appendChild(cardFollowers);
  cardInfo.appendChild(cardFollowing);
  cardInfo.appendChild(cardBio);
  cardProfile.appendChild(cardAddress);

  return card;
}
