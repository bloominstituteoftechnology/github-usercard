/* Step 1: using axios, send a GET request to the following URL 
           (replacing the placeholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get(`https://api.github.com/users/thayerve`)
.then(data => {
  console.log(data);
  createCard(data);
})
.catch(error =>{
  console.log('some kind of error! ', error)
})
// Step 2: Inspect the data for user here. Done.

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

// const followersArray = [];
// ^ UNCOMMENT THIS ********

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
    <p>Followers: {user's followers count}</p>
    <p>Following: {user's following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/

function createCard(object) {
  const cardsContainer = document.querySelector('.cards')
  // create elements
  const card = document.createElement('div')
  const avatar = document.createElement('img')
  const cardInfo = document.createElement('div')
  const name = document.createElement('h3')
  const username = document.createElement('p')
  const locationP = document.createElement('p')
  const profileP = document.createElement('p')
  const profileLink = document.createElement('a')
  const followersP = document.createElement('p')
  const followingP = document.createElement('p')
  const bioP = document.createElement('p')

   // set content
   name.textContent = object.data.name;
   username.textContent = object.data.login;
   locationP.textContent = 'Location: ' + object.data.location;
   profileLink.href = object.data.url;
   profileP.innerHTML = `Profile:  
   <a href=${profileLink}>${profileLink}</a>`;
   const followersCount = object.data.followers;
   followersP.textContent = `Followers: ${followersCount}`;
   const followingCount = object.data.following;
   followingP.textContent = `Following: ${followingCount}`;
   bioP.textContent = `Bio: ${object.data.bio}`;

  // set styles and attributes
  card.classList.add('card');
  avatar.src = object.data.avatar_url;
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');

  // set structure
  cardsContainer.appendChild(card);
  card.appendChild(avatar);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(locationP);
  cardInfo.appendChild(profileP);
  cardInfo.appendChild(followersP);
  cardInfo.appendChild(followingP);
  cardInfo.appendChild(bioP);

return card;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
