import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const htmlCards = document.querySelector('.cards');

const followersArray = ["dougwilson0000", "tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];

followersArray.forEach(item => {

  axios.get(`https://api.github.com/users/${item}`)
  .then(resp => {
    const ghCards = makeCards(resp.data);
    htmlCards.appendChild(ghCards);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => console.log('WOOOOOOOOOOO'));
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





function makeCards(obj) {
  const cardDiv = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardInfoDiv = document.createElement('div');
  const usersName = document.createElement('h3');
  const usersUsername = document.createElement('p');
  const usersLocation = document.createElement('p');
  const usersProfiles = document.createElement('p');
  const link = document.createElement('a');
  const usersFollowers = document.createElement('p');
  const usersIsFollowing = document.createElement('p');
  const usersBio = document.createElement('p');

  cardImg.src = obj.avatar_url
  usersName.textContent = obj.name;
  usersUsername.textContent = obj.login;
  usersLocation.textContent = `Location: ${obj.location}`;
  usersProfiles.textContent = 'Profile:';
  link.href = obj.html_url;
  link.textContent = obj.html_url;
  usersFollowers.textContent = obj.followers;
  usersIsFollowing.textContent = obj.following;
  usersBio.textContent = obj.bio;

  cardDiv.appendChild(cardImg);
  cardDiv.appendChild(cardInfoDiv);
  cardInfoDiv.appendChild(usersName);
  cardInfoDiv.appendChild(usersUsername);
  cardInfoDiv.appendChild(usersLocation);
  cardInfoDiv.appendChild(usersProfiles);
  usersProfiles.appendChild(link);
  cardInfoDiv.appendChild(usersFollowers);
  cardInfoDiv.appendChild(usersIsFollowing);
  cardInfoDiv.appendChild(usersBio);
  
  cardDiv.classList.add('card');
  cardInfoDiv.classList.add('card-info');
  usersName.classList.add('name');
  usersUsername.classList.add('username');


  console.log(cardDiv);
  return cardDiv
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
    "tetondan"
    "dustinmyers"
    "justsml"
    "luishrd"
    "bigknell"
*/

