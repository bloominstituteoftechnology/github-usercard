/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get("https://api.github.com/users/Steverenner1")
  .then(dataSet => {
    const gitInfo = dataSet.data;
    cards.appendChild(gitInfo)
  }); 
  try {
  } catch (error) {
    document.querySelector('.cards').textContent = 'No Data'
  }
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

const followersArray = ['Steverenner1', 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];
followersArray.forEach(user => {
  axios.get(`https://api.github.com/users/${user}`)

  .then (data => {
    const card = gitCard(data.data)
    const cards = document.querySelector('.cards')
    cards.appendChild(card)
  })

})


function gitCard(info) {
  const newCard = document.createElement('div');
  const newImage = document.createElement('img');
  const newCardInfo = document.createElement('div');
  const newName = document.createElement('h3');
  const newUserName = document.createElement('p');
  const newLocation = document.createElement('p');
  const newProfile = document.createElement('p');
  const newFollowers = document.createElement('p');
  const newFollowing = document.createElement('p');
  const newBio = document.createElement('p');

  newCard.appendChild(newImage);
  newCard.classList.add('card');
  newImage.src = info.avatar_url;

  newCard.appendChild(newCardInfo);
  newCardInfo.classList.add('card-info');

  newCardInfo.appendChild(newName);
  newName.classList.add('name');
  newName.textContent = info.name;

  newCardInfo.appendChild(newUserName);
  newUserName.classList.add('username');
  newUserName.textContent = info.login;

  newCardInfo.appendChild(newLocation);
  newLocation.textContent = info.newLocation;

  newCardInfo.appendChild(newProfile);
  newProfile.textContent = info.profile;

  newCardInfo.appendChild(newFollowers);
  newFollowers.textContent = info.followers;

  newCardInfo.appendChild(newFollowing);
  newFollowing.textContent = info.following;

  newCardInfo.appendChild(newBio);
  newBio.textContent = info.bio;
  
  // newCard.classList.add('card');
  // newCardInfo.classList.add('card-info');
  // newName.classList.add('name');
  // newUsername.classList.add('username');

  // newImage.src = imgUrl;
  // newName.textContent = "Steve Renner";
  // newUsername.textContent = "Steverenner1";
  // newLocation.textContent = "Seattle, Washington";
  // newProfile.src = github.com/Steverenner1;
  // newFollowers.textContent = "users followers count";
  // newFollowing.textContent = "users following count";
  // newBio.textContent = "my bio";

  // newCard.appendChild(newImage);
  // newCard.appendChild(newCardInfo);
  // newCardInfo.appendChild(newName);
  // newCardInfo.appendChild(newUsername);
  // newCardInfo.appendChild(newLocation);
  // newCardInfo.appendChild(newProfile);
  // newCardInfo.appendChild(newFollowers);
  // newCardInfo.appendChild(newFollowing);
  // newCardInfo.appendChild(newBio);

  return newCard;
};

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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
