import axios from "axios"
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/


const userData = axios.get('https://api.github.com/users/loshjarson')
      .then (response => {
        const cardsContainer = document.querySelector('.cards');
        cardsContainer.appendChild(CardMaker(response));
        console.log(response);
        const followerData = axios.get(response.data.followers_url)
            .then (response => {
              console.log(response)
              const followersArray = ["tetondan",
                "dustinmyers",
                "justsml",
                "luishrd",
                "bigknell"];
              response.data.forEach(follower => {
                followersArray.push(follower.login)
              })
              followersArray.forEach(user => {
                const newUserData = axios.get(`https://api.github.com/users/${user}`)
                    .then (response => {
                      const cardsContainer = document.querySelector('.cards');
                      cardsContainer.appendChild(CardMaker(response))
                    })
              })
            })
      });


      /*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
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

// const followersArray = ["tetondan",
//   "dustinmyers",
//   "justsml",
//   "luishrd",
//   "bigknell",
//   "JamariaSims",
//   "BrandonWorobi"];

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
function CardMaker(object){
  const cardContainer = document.createElement("div");
  cardContainer.className = "card";
  const userImg = document.createElement('img');
  userImg.setAttribute("src", object.data.avatar_url );
  cardContainer.appendChild(userImg);
  const cardInfo = document.createElement("div");
  cardInfo.className = "card-info";
  cardContainer.appendChild(cardInfo);
  const name = document.createElement("h3");
  name.className = "name";
  name.textContent = object.data.name;
  cardInfo.appendChild(name);
  const username = document.createElement("p");
  username.className = "username";
  username.textContent = object.data.login;
  cardInfo.appendChild(username);
  const location = document.createElement("p");
  location.textContent = "Location: " + object.data.location;
  cardInfo.appendChild(location);
  const profile = document.createElement("p");
  profile.innerHTML = `Profile: <a href=${object.data.url}>${object.data.url}</a>`;
  cardInfo.appendChild(profile);
  const followers = document.createElement("p");
  followers.innerText = `Followers: ${object.data.followers}`;
  cardInfo.appendChild(followers);
  const following = document.createElement("p");
  following.innerText = `Following: ${object.data.following}`;
  cardInfo.appendChild(following);
  const bio = document.createElement("p");
  bio.innerText = `Bio: ${object.data.bio}`;
  cardInfo.appendChild(bio);
  return cardContainer
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
