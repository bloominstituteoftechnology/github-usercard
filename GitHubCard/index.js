/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from "axios";

axios.get('https://api.github.com/users/MaryAngelique')
  .then((response) => {

  console.log(response);

  const container = document.querySelector('.cards');

  container.appendChild(cardMaker(response.data));

  for(let i = 0; i <followersArray.length; i++) {
    axios.get(`https://api.github.com/users/${followersArray[i]}`).then((response) => {
      container.appendChild(cardMaker(response.data));
    });
  }
});


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
  "bigknell"
];

followersArray.map(function (user) {
  axios.get('https://api.github.com/users/' + [user]).then((response) => {
    const divCard = cardMaker(response);
    const cards = document.querySelector('.cards');
    cards.appendChild(divCard);
  })

  .catch((error) => {
    console.log(error);
  })
});

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
function cardMaker(object) {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');
  
  const image = document.createElement('img');
  image.src = object.data.avatar_url;

  const headerName = document.createElement('h3');
  headerName.classList.add('name');
  headerName.innerHTML = object.data.name;

  const userName = document.createElement('p');
  userName.classList.add('username');
  userName.innerHTML = object.data.login;

  const location = document.createElement('p');
  location.innerHTML = `Location: ${object.data.location}`;

  const profile = document.createElement('p');
  profile.innerHTML = 'Profile';

  const profileAddress = document.createElement('a');
  profileAddress.href = object.data.html_url;
  profileAddress.innerHTML = object.data.html_url;

  const followers = document.createElement('p');
  followers.innerHTML = `Followers: ${object.data.followers}`;

  const following = document.createElement('p');
  following.innerHTML = `Followers: ${object.data.following}`;
  
  const bio = document.createElement('p');
  bio.innerHTML = `Bio: ${object.data.bio}`;
  // Step 4
  cardDiv.appendChild(image);
  cardDiv.appendChild(headerName);
  headerName.appendChild(name);
  headerName.appendChild(userName);
  headerName.appendChild(locationbar);
  headerName.appendChild(profile);
  profile.appendChild(profileAddress);
  headerName.appendChild(followers);
  headerName.appendChild(following);
  headerName.appendChild(bio);

  return cardDiv;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
