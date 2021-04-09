/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from "axios";

// console.log("check out axios: \n \n", axios);
// const result = axios.get("https://api.github.com/users/BrooksDav46")
// console.log(result);

// console.log("1. about to fetch data with axios");
let cardsContainer = document.querySelector('.cards')
axios
  .get("https://api.github.com/users/BrooksDav46")
  .then((futureData) => {
    console.log(futureData);
    cardsContainer.appendChild(profileCardCreator(futureData))
  // console.log("2. here is the future data", futureData);
  })
  .catch((error) => {
    console.log(error);
  })
//  console.log("3. we requested the data axios");
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
        x<h3 class="name">{users name}</h3>
        x<p class="username">{users user name}</p>
        x<p>Location: {users location}</p>
        x<p>Profile:
         x <a href={address to users github page}>{address to users github page}</a>
        </p>
        x<p>Followers: {users followers count}</p>
        x<p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/


function profileCardCreator(singleObj){
  const divCard = document.createElement('div');
  const divCardInfo = document.createElement('div')
  const imgUser = document.createElement('img');
  const h3Name = document.createElement('h3');
  const pUsername = document.createElement('p');
  const pLocation = document.createElement('p');
  const pProfile = document.createElement('p');
  const aProfileLink = document.createElement('a');
  const pFollowers = document.createElement('p');
  const pFollowing = document.createElement('p');
  const pBio = document.createElement('p');

  divCard.appendChild(imgUser);
  divCard.appendChild(divCardInfo)
  divCardInfo.appendChild(h3Name);
  divCardInfo.appendChild(pUsername);
  divCardInfo.appendChild(pLocation);
  divCardInfo.appendChild(pProfile);
  pProfile.appendChild(aProfileLink);
  divCardInfo.appendChild(pFollowers);
  divCardInfo.appendChild(pFollowing);
  divCardInfo.appendChild(pBio);

  divCard.classList.add('card');
  divCardInfo.classList.add('card-info')
  h3Name.classList.add('name')
  pUsername.classList.add('username')

  imgUser.setAttribute('src',singleObj.data.avatar_url)

  h3Name.textContent = singleObj.data.name;
  pUsername.textContent = singleObj.data.username;
  pLocation.textContent = 'location: ' + singleObj.data.location;
  pProfile.textContent = 'Profile: ' 
  pFollowers.textContent = 'Followers: ' + singleObj.data.followers;
  pFollowing.textContent = 'Following: ' + singleObj.data.following;
  pBio.textContent = 'Bio:' + singleObj.data.bio;
  // aProfileLink.textContent = singleObj. find user profile url


  // console.log(divCard);
  return divCard;
}

// divCard.forEach(obj => {
//   const newCard = document.querySelector('.card')
//   newCard.appendChild(objects(obj));
// })



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
