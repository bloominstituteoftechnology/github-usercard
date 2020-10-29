/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios'

axios
  .get('https:api.github.com/users/DavidHall-Code')
  .then((res) => {
    console.log(res.data)
    const newCard = gitCard(res.data)
    entryPoint.appendChild(newCard)
  })
  .catch((err) => {
    console.log(err)
  })

  const entryPoint = document.querySelector('.cards')
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

const followersArray = [
  'mxcl',
  'jonathanong',
  'fabpot',
  'samdark',
  'andrew'
];

followersArray.forEach(i => {
  const newLocal = 'https://api.github.com/users/'

  axios
    .get(newLocal + [i])
    .then((res) => {
      const newCard2 = gitCard(res.data)
      entryPoint.appendChild(newCard2)
    })
    .catch((err) => {
      console.log(err)
    })
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

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
function gitCard(data){

  //Define Element
  //Card
  const newCard = document.createElement('div');

  //Image
  const newImage = document.createElement('img');
  //Card Info
  const newInfo = document.createElement('div');
  //Name {users name}
  const newName = document.createElement('h3');
  //UserName {users userName}
  const newUserName = document.createElement('p');
  //Location {users location}
  const newLocation = document.createElement('p');
  //Profile
  const newProfile = document.createElement('p');
  //Followers
  const newFollowers = document.createElement('p');
  //Following
  const newFollowing = document.createElement('p');

  //Bio {users bio}
  const newBio = document.createElement('p');
  const newA = document.createElement('a');

  //Set Structure of Elements (appendChild)
  newCard.appendChild(newImage);
  newCard.appendChild(newInfo);
  newInfo.appendChild(newName);
  newInfo.appendChild(newUserName);
  newInfo.appendChild(newLocation);

  newInfo.appendChild(newProfile);
  newProfile.textContent =  `Profile: ${data.html_url}`;
  newProfile.appendChild(newA);

  newInfo.appendChild(newFollowers);
  newInfo.appendChild(newFollowing);
  newInfo.appendChild(newBio);

  //Set Class
  //Card
  newCard.classList.add('card');
  //Card Info
  newInfo.classList.add('card-info');
  //Name
  newName.classList.add('name');
  //UserName
  newUserName.classList.add('username');

  //Set Content
  newImage.setAttribute('src', data.avatar_url);
  // newInfo.textContent =  ;
  newName.textContent = `${data.name}`;
  newUserName.textContent = data.login;
  newLocation.textContent = data.location;
  
  newFollowers.textContent = `Followers: ${data.followers}`;
  newFollowing.textContent = `Following: ${data.following}`;
  newBio.textContent = `Bio: ${data.bio}`;

  return newCard

}