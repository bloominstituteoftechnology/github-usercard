/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get("https://api.github.com/users/TylerAlsop")
  .then((response) => {
    console.log(response);
    response.forEach((user) => {
      const newUser = githubCardCreator(user);
      cards.appendChild(newUser);
    })
  })
  .catch((error) => {
    console.log("You reached an error ", error);
  })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

const cards = document.querySelector('.cards');

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

function githubCardCreator (object) {
  ////////////////  Create Elements  ////////////////
  const card = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const usersName = document.createElement('h3');
  const usersUserName = document.createElement('p');
  const location = document.createElement('p')
  const usersProfile = document.createElement('p');
  const usersGitHub = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  ////////////////  Add Attributes  ////////////////
  cardImg.src = object.data.avatar_url;
  usersGitHub.href = object.data.html_url;

  ////////////////  Add Classes  ////////////////
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  usersName.classList.add('name');
  usersUserName.classList.add('username');

  ////////////////  Add Content  ////////////////
  usersName.textContent = `${object.data.name}`;
  usersUserName.textContent = `${object.data.login}`;
  location.textContent = `Location: ${object.data.location}`;
  usersProfile.textContent = `Profile: `;
  usersGitHub.textContent = `${object.data.html_url}`;
  followers.textContent = `Followers: ${object.data.followers_url}`;
  following.textContent = `Following: ${object.data.following_url}`;
  bio.textContent = `Bio: ${object.data.bio}`


  ////////////////  Append/Nest  ////////////////
  card.appendChild(cardImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(usersName);
  cardInfo.appendChild(usersUserName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(usersProfile);
  usersProfile.appendChild(usersGitHub);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  return card;
}










/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
