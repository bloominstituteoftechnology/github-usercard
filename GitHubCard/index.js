const { default: Axios } = require("axios");

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

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

const followersArray = [];

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
function GithubCard(imgUrl, name, userName, location, followers, following, bio, profileLink) {
  // I'm creating all the elements for the component
  const newCard = document.createElement('div');
  const userImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const cardName = document.createElement('h3');
  const cardUserName = document.createElement('p');
  const cardLocation = document.createElement('p');
  const cardProfileP = document.createElement('p');
  const cardFollowers = document.createElement('p');
  const cardFollowing = document.createElement('p');
  const cardBio = document.createElement('p');
  const cardProfileA = document.createElement('a');

  // Now I'm appending all the elements to the DOM
  newCard.appendChild(userImg);
  newCard.appendChild(cardInfo);
  cardInfo.appendChild(cardName);
  cardInfo.appendChild(cardUserName);
  cardInfo.appendChild(cardLocation);
  cardInfo.appendChild(cardProfileP);
  cardInfo.appendChild(cardFollowers);
  cardInfo.appendChild(cardFollowing);
  cardInfo.appendChild(cardBio);
  cardProfileP.appendChild(cardProfileA);

  // adding styling (the classes)
  newCard.classList.add('card');
  cardInfo.classList.add('card-info');
  cardName.classList.add('name');
  cardUserName.classList.add('username');

  // adding interactivity/content
  userImg.src = imgUrl;
  cardName.textContent = name;
  cardUserName.textContent = userName;
  cardLocation.textContent = location;
  cardFollowers.textContent = followers;
  cardFollowing.textContent = following;
  cardBio.textContent = bio;
  cardprofileA = profileLink;

  return newCard;
}

// creating a variable and making it's value you the div container I want to append my component to.
const entryPoint = document.querySelector('.cards');
// imgUrl, name, userName, location, followers, following, bio, profileLink
let dataArray = [];
Axios
  .get('https://api.github.com/users/llpookyll')
  .then((res) => {
    console.log('Here is the response', res);

    dataArray.push(res.data);

    console.log('the array', dataArray);

    dataArray.forEach((data) => {
      entryPoint.append(GithubCard(data.avatar_url, data.name, data.login, data.location, data.followers, data.following, data.bio, data.html_url))
    });
    
  })
  .catch((err) => {
    console.log('Here is the error', err);
  });