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
function cardCreator(obj) {
  // create elements
  const card = document.createElement("div"),
    cardImg = document.createElement("img"),
    cardInfo = document.createElement("div"),
    cardName = document.createElement("h3"),
    cardUserName = document.createElement("p"),
    cardLocation = document.createElement("p"),
    cardProfile = document.createElement("p"),
    cardProfileLink = document.createElement("a"),
    cardFollowers = document.createElement("p"),
    cardFollowing = document.createElement("p"),
    cardBio = document.createElement("p");

  // nest elements
  card.append(cardImg);
  card.append(cardInfo);
  cardInfo.append(cardName);
  cardInfo.append(cardUserName);
  cardInfo.append(cardLocation);
  cardInfo.append(cardProfile);
  cardInfo.append(cardFollowers);
  cardInfo.append(cardFollowing);
  cardInfo.append(cardBio);

  console.log(cardProfile);
  console.log(cardProfileLink);

  // add classes to elements
  card.classList.add("card");
  cardInfo.classList.add("card-info");
  cardName.classList.add("name");
  cardUserName.classList.add("username");

  // pass userd data to card
  cardImg.src = obj.avatar_url;
  cardName.textContent = obj.name;
  cardUserName.textContent = obj.login;
  cardLocation.textContent = `Location: ${obj.location}`;
  cardProfileLink.href = obj.html_url;
  cardProfileLink.textContent = obj.html_url;
  cardProfile.textContent = "Profile: ";
  cardFollowers.textContent = `Followers: ${obj.followers}`;
  cardFollowing.textContent = `Following: ${obj.following}`;
  cardBio.textContent = `Bio: ${obj.bio}`;

  // nest anchor tag
  cardProfile.append(cardProfileLink);

  console.log(card);

  // return DOM element
  return card;
}

// select .card element
const cards = document.querySelector(".cards");

// create new card with my data
axios
  .get("https://api.github.com/users/AmMiRo")
  .then(response => {
    // console.log(response);
    cards.append(cardCreator(response.data));
  })
  .catch(error => {
    console.log(error);
  });

//
axios
  .get("https://api.github.com/users/AmMiRo/followers")
  .then(response => {
    // console.log(response);
    response.data.forEach(follower => {
      axios
        .get(follower.url)
        .then(followerResponse => {
          // console.log(followerResponse);
          cards.append(cardCreator(followerResponse.data));
        })
        .catch(followerError => {
          console.log(followerError);
        });
    });
  })
  .catch(error => {
    console.log(error);
  });

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
