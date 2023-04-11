import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

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


const followersArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];
followersArray.forEach(elem =>  {
  axios.get(`https://api.github.com/users/${elem}`)
  .then(resp => {
    document.querySelector(".cards").appendChild(gitCard(resp.data));
  })
  .catch(err => console.error(err))
})

function gitCard(arg) {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardIMG = document.createElement("img");
  cardIMG.src = arg.avatar_url;
  card.appendChild(cardIMG);

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");
  card.appendChild(cardInfo);
  
  const cardName = document.createElement("h3");
  cardName.classList.add("name");
  cardName.textContent = arg.name;
  cardInfo.appendChild(cardName);
  
  const cardUserName = document.createElement("p");
  cardUserName.classList.add("username");
  cardUserName.textContent = arg.login;
  cardInfo.appendChild(cardUserName);

  const location = document.createElement("p");
  location.textContent = arg.location;
  cardInfo.appendChild(location);

  const cardProfile = document.createElement("p");
  cardProfile.textContent = "Profile";
  cardInfo.appendChild(cardProfile);

  const cardLinks = document.createElement("p");
  cardLinks.textContent = "Link to profile";
  cardLinks.href = arg.html_url;
  cardProfile.appendChild(cardLinks);

  const cardFollowers = document.createElement("p");
  cardFollowers.textContent = `Followers: ${arg.followers}`
  cardInfo.appendChild(cardFollowers);

  const cardFollowings = document.createElement("p");
  cardFollowings.textContent = `Followings: ${arg.following}`
  cardInfo.appendChild(cardFollowings);

  const cardBio = document.createElement("p");
  cardBio.textContent = arg.bio;
  cardInfo.appendChild(cardBio);

  return card;
}

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

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
