import axios from "axios";
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
// axios
//   .get("https://api.github.com/users/williamVelichko")
//   .then((resp) => {
//     const user = userInterface(resp.data);
//     document.querySelector(".cards").prepend(user);
//     console.log(resp);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
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

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
  "williamvelichko",
];

function userInterface(obj) {
  console.log(obj.name);
  const mainContent = document.createElement("div");
  const imageType = document.createElement("img");
  const cardInfo = document.createElement("div");
  const title = document.createElement("h3");
  const usersName = document.createElement("p");
  const usersLocation = document.createElement("p");
  const usersProfile = document.createElement("p");
  const anchorTag = document.createElement("a");
  const followerCount = document.createElement("p");
  const followingCount = document.createElement("p");
  const usersBio = document.createElement("p");

  mainContent.classList.add("card");
  imageType.src = obj.avatar_url;
  cardInfo.classList.add("card-info");
  title.classList.add("name");
  title.textContent = obj.name;
  usersName.classList.add("username");
  usersName.textContent = obj.login;
  usersLocation.textContent = `Location: ${obj.location}`;
  usersProfile.textContent = `profile: ${(anchorTag.href = obj.html_url)}`;
  anchorTag.href = obj.html_url;
  followerCount.textContent = `Followers: ${obj.followers}`;
  followingCount.textContent = `Following: ${obj.following}`;
  usersBio.textContent = `Bio: ${obj.bio}`;
  //usersProfile.textContent = obj.html_url;

  mainContent.appendChild(imageType);
  mainContent.appendChild(cardInfo);
  cardInfo.appendChild(title);
  cardInfo.appendChild(usersName);
  cardInfo.appendChild(usersLocation);
  cardInfo.appendChild(usersProfile);
  cardInfo.appendChild(followerCount);
  cardInfo.appendChild(followingCount);
  cardInfo.appendChild(usersBio);

  usersProfile.appendChild(anchorTag);

  return mainContent;
}

for (let i = 0; i < followersArray.length; i++) {
  axios
    .get(`https://api.github.com/users/${followersArray[i]}`)
    .then((resp) => {
      const user = userInterface(resp.data);
      document.querySelector(".cards").appendChild(user);
    })
    .catch((error) => {
      console.log(error);
    });
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
