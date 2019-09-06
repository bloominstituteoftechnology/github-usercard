/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const entryPoint = 
document.querySelector('.cards')

axios
  .get("https://api.github.com/users/thejohnwatt")
  .then(response => {
    console.log(response);
    const userData = response.data;
    entryPoint.appendChild(userCard(userData))
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/



/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];


axios
  .get("https://api.github.com/users/dbriksza")
  .then(response => {
    console.log(response);
    const userData = response.data;
    entryPoint.appendChild(userCard(userData))
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });
  axios
  .get("https://api.github.com/users/kevinnguyen805")
  .then(response => {
    console.log(response);
    const userData = response.data;
    entryPoint.appendChild(userCard(userData))
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });
  axios
  .get("https://api.github.com/users/zrsmith75")
  .then(response => {
    console.log(response);
    const userData = response.data;
    entryPoint.appendChild(userCard(userData))
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });
  axios
  .get("https://api.github.com/users/roywakumelojr")
  .then(response => {
    console.log(response);
    const userData = response.data;
    entryPoint.appendChild(userCard(userData))
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });
  axios
  .get("https://api.github.com/users/gnhossain")
  .then(response => {
    console.log(response);
    const userData = response.data;
    entryPoint.appendChild(userCard(userData))
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });

  //still needs work

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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

function userCard(github) {

  const
    newCard = document.createElement('div'),
    userImg = document.createElement('img'),
    cardInfo = document.createElement('div'),
    cardName = document.createElement('h3'),
    userName = document.createElement('p'),
    userLocation = document.createElement('p'),
    profile = document.createElement('p'),
    profileLink = document.createElement('a'),
    followers = document.createElement('p'),
    following = document.createElement('p'),
    bio = document.createElement('p');

  newCard.appendChild(userImg);
  newCard.appendChild(cardInfo);
  cardInfo.appendChild(cardName);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  profile.appendChild(profileLink);

  newCard.classList.add('card');
  cardInfo.classList.add('card-info');
  cardName.classList.add('name');
  userName.classList.add('username');

  userImg.src = github.avatar_url;
  cardName.textContent = github.name;
  userName.textContent = github.login;
  userLocation.textContent = `Location: ${github.location}`;
  profile.textContent = 'Profile: ';
  profileLink.href = github.html_url;
  followers.textContent = `Followers: ${github.followers}`;
  following.textContent = `Following: ${github.following}`;
  bio.textContent = `Bio: ${github.bio}`;


  return newCard
}

// const entryPoint = 
// document.querySelector('.card')

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
