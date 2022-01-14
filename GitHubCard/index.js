import axios from "axios";
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/VladimirSaakian')
  .then( response => {
    // console.log(response);
    const userData = response.data;
    // console.log(createCard(userData))
    const mountPoint = document.querySelector('.cards');
    const userCard = createCard(userData);
    mountPoint.appendChild(userCard);
    followersCard(followersArray);
  })
  .catch( err => {
    console.log('error:', err)
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

const followersArray = [
  "tetondan", 
  "dustinmyers",  
  "justsml",
  "luishrd",
  "bigknell",
];

function followersCard(followers){
  followers.forEach(follower => {
    const followerLink = 'https://api.github.com/users/' + follower;

    axios.get(followerLink)
      .then( response => {
      // console.log(response);
      const userData = response.data;
      // console.log(createCard(userData))
      const mountPoint = document.querySelector('.cards');
      const userCard = createCard(userData);
      mountPoint.appendChild(userCard);  
  })
    .catch( err => {
      console.log('error:', err)
    })
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

function createCard(userData){
  //card element
  const card = document.createElement('div');
  card.classList.add('card');
  //image element
  const userImage = document.createElement('img');
  userImage.src = userData.avatar_url;
  card.appendChild(userImage);
  //card info element
  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  card.appendChild(cardInfo);
  //users real name
  const userName = document.createElement('h3');
  userName.textContent = userData.name;
  cardInfo.appendChild(userName);
  //users username
  const userUsername = document.createElement('p');
  userUsername.textContent = userData.login;
  cardInfo.appendChild(userUsername);
  //users location
  const userLocation = document.createElement('p');
  userLocation.textContent = 'Location: ' + userData.location;
  cardInfo.appendChild(userLocation);
  //user profile
  const userProfile = document.createElement('p');
  userProfile.textContent = 'Profile:';
  cardInfo.appendChild(userProfile);
  //user profile link
  const userProfileLink = document.createElement('a');
  userProfileLink.href = userData.html_url;
  userProfileLink.textContent = userData.html_url;
  userProfile.appendChild(userProfileLink);
  //users follower count
  const userFollows = document.createElement('p');
  userFollows.textContent = userData.followers;
  cardInfo.appendChild(userFollows);
  //user following
  const userFollowing = document.createElement('p');
  userFollowing.textContent = userData.following;
  cardInfo.appendChild(userFollowing);
  //users bio
  const usersBio = document.createElement('p');
  usersBio.textContent = userData.bio;
  cardInfo.appendChild(usersBio);
  //return element for mounting
  return card;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
