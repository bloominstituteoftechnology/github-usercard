import axios from "axios";

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const cardContainer = document.querySelector(".cards");

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
axios
  .get("https://api.github.com/users/leahfern")
  .then((res) => {
    const user = res.data;
    const userCard = cardMaker(user);
    cardContainer.appendChild(userCard);
  })
  .catch((err) => {
    console.log(err);
  });

//GUIDE PROJECT EXAMPLE
//const dogCard = dogCardMaker({ imageURL: image, breed:'Poodle' });
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
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];
followersArray.forEach(follower => {
  axios.get(`https://api.github.com/users/${follower}`)
  .then((res) => {
    const user = res.data;
    const userCard = cardMaker(user);
    cardContainer.appendChild(userCard);
  })
  .catch((err) => {
    console.log(err);
  });
})
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

function cardMaker(obj) {
  //create new html elements
  const userCard = document.createElement("div");
  const userImage = document.createElement("img");
  const cardInfo = document.createElement("div");
  const userName = document.createElement("h3");
  const userUsername = document.createElement("p");
  const userLocation = document.createElement("p");
  const userProfile = document.createElement("p");
  const userLink = document.createElement("a");
  const userFollowers = document.createElement("p");
  const userFollowing = document.createElement("p");
  const userBio = document.createElement("p");
  const textContainer = document.createElement("div");


  //place elements
  userCard.appendChild(userImage);
  userCard.appendChild(cardInfo);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(userUsername);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(userProfile);
  cardInfo.appendChild(userFollowers);
  cardInfo.appendChild(userFollowing);
  cardInfo.appendChild(userBio);
  userProfile.appendChild(textContainer);
  userProfile.appendChild(userLink);

  //add content
  userName.textContent = obj.name;
  userUsername.textContent = obj.username;
  userLocation.textContent = `Location: ${obj.location}`;
  userFollowers.textContent = `Followers: ${obj.followers}`;
  userFollowing.textContent = `Following: ${obj.following}`;
  userBio.textContent = `Bio: ${obj.bio}`;
  textContainer.textContent = 'Profile: ';
  userLink.textContent = obj.html_url;

  //add attributes
  userCard.classList.add("card");
  userImage.src = obj.avatar_url;
  cardInfo.classList.add("card-info");
  userName.classList.add("name");
  userUsername.classList.add("username");
  userLink.href = obj.html_url;


  //return
  console.log(userCard);
  return userCard;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
