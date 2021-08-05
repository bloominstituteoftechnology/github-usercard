/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const followersArray = ["brentbess21", "tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];

const entryPoint = document.querySelector(".cards");

function lotsOfCards(username) {
axios.get(`https://api.github.com/users/${username}`)
.then(response =>{
  const newProfile = cardMaker(response);
  entryPoint.appendChild(newProfile);
})
.catch(err=>{
  console.error(err);
})
}

followersArray.forEach(username =>{
  lotsOfCards(username);
})



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

// const followersArray = ["brentbess21", "tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];

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


function cardMaker(obj){
  //create elements
  const cardContainer = document.createElement("div");
  const cardImg = document.createElement("img");
  const cardInfoDiv = document.createElement("div");
  const cardName = document.createElement("h3");
  const cardUsername = document.createElement("p");
  const cardLocation = document.createElement("p");
  const cardProfile = document.createElement("p");
  const cardProfileLink = document.createElement("a");
  const cardFollowers = document.createElement("p");
  const cardFollowing = document.createElement("p");
  const cardBio = document.createElement("p");

  //create structure 
  cardContainer.appendChild(cardImg);
  cardContainer.appendChild(cardInfoDiv);
  cardInfoDiv.appendChild(cardName);
  cardInfoDiv.appendChild(cardUsername);
  cardInfoDiv.appendChild(cardLocation);
  cardInfoDiv.appendChild(cardProfile);
  cardProfile.appendChild(cardProfileLink);
  cardInfoDiv.appendChild(cardFollowers);
  cardInfoDiv.appendChild(cardFollowing);
  cardInfoDiv.appendChild(cardBio);

  //pass in classes and attributes
  cardContainer.classList.add("card");
  cardImg.src = obj["data"]["avatar_url"];
  cardInfoDiv.classList.add("card-info");
  cardName.classList.add("name");
  cardUsername.classList.add("username");
  cardProfileLink.href = obj["data"]["url"];

  //pass in content
  cardName.textContent = obj.data.name;
  cardUsername.textContent = obj.data.login;
  cardLocation.textContent = obj.data.location;
  cardProfileLink.textContent = obj.data.url;
  cardFollowers.textContent = `Followers: ${obj.data.followers}`;
  cardFollowing.textContent = `Following: ${obj.data.following}`;
  cardBio.textContent = obj.data.bio;

  //add functionality

  //return card

  return cardContainer;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
