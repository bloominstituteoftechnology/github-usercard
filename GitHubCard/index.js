/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const mainCard = document.querySelector('.cards');

axios

.get('https://api.github.com/users/chefboyrdeuce')
.then(response => {
  // const newUserCard = new githubCard(data);
  mainCard.appendChild(githubCard(response.data));
  console.log(response);
})

.catch(error => {
  console.error(error)
})

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

function githubCard(data){
  const userCard = document.createElement('div');
  userCard.classList.add('card');

  const userImage = document.createElement('img');
  userImage.src = data.avatar_url;

  const userInfo = document.createElement('div');
  userInfo.classList.add('card-info');

  const githubName = document.createElement('h3');
  githubName.classList.add('name');
  githubName.textContent = data.name;

  const userName = document.createElement('p');
  userName.classList.add('username');
  userName.textContent = data.login;

  const userLocation = document.createElement('p');
  userLocation.textContent = `Location: ${data.location}`;

  const userProfile = document.createElement('p');
  userProfile.textContent = 'Profile: ';

  const userAtag = document.createElement('a');
  userAtag.href = data.html_url;
  userAtag.textContent = data.html_url;

  const userFollowers = document.createElement('p');
  userFollowers.textContent = `Followers: ${data.followers}`;

  const userFollowing = document.createElement('p');
  userFollowing.textContent = `Following: ${data.following}`;

  const userBio = document.createElement('p');
  userBio.textContent = `Bio: ${data.bio}`;

  userInfo.appendChild(githubName);
  userInfo.appendChild(userName);
  userInfo.appendChild(userLocation);
  userInfo.appendChild(userProfile);
  userInfo.appendChild(userFollowers);
  userInfo.appendChild(userFollowing);
  userInfo.appendChild(userBio);
  
  userCard.appendChild(userImage);
  userCard.appendChild(userInfo);

  userProfile.appendChild(userAtag);

  return userCard;
} 


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
