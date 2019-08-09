/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

const mainCard = document.querySelector('.cards');



  axios.get('https://api.github.com/users/irisjitomo')
  .then((res) => {
    console.log(res.data);
    mainCard.appendChild(cardCreator(res.data));
  })


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


const followersArray = [
  "jonyonson",
  "allisonkydy",
  "CameronAlvarado",
  "jeffreywhitaker",
  "NicholasInterest1",
]

followersArray.forEach(follower => {
  axios.get(`https://api.github.com/users/${follower}`)
  .then(res => {
    mainCard.appendChild(cardCreator(res.data));
    console.log(res.data);
  })
})

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

// window.addEventListener('load', cardCreator);


function cardCreator(obj) {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');

  const newImg = document.createElement('img');
  newImg.src = obj.avatar_url;
  
  const cardInfoDiv = document.createElement('div');
  cardInfoDiv.classList.add('card-info');
  
  const nameTitle = document.createElement('h3');
  nameTitle.classList.add('name');
  nameTitle.textContent = obj.name;
  
  const usernameP = document.createElement('p');
  usernameP.classList.add('username');
  usernameP.textContent = obj.login;
  
  const locationP = document.createElement('p');
  locationP.textContent = `Location: ${obj.location || 'none'}`
  
  const profileP = document.createElement('p');
  profileP.textContent = 'Profile: ';
  
  const profileLink = document.createElement('a');
  profileLink.href = obj.html_url;
  profileLink.textContent = obj.html_url;
  
  const followersP = document.createElement('p');
  followersP.textContent = `Followers:  ${obj.followers}`;
  
  const followingP = document.createElement('p');
  followingP.textContent = `Following:  ${obj.following}`;
  
  const bioP = document.createElement('p');
  bioP.textContent = `Bio: ${obj.bio || 'none'}`;

	cardDiv.appendChild(newImg);
	cardDiv.appendChild(cardInfoDiv);
	cardInfoDiv.appendChild(nameTitle);
	cardInfoDiv.appendChild(usernameP);
	cardInfoDiv.appendChild(locationP);
	cardInfoDiv.appendChild(profileP);
	cardInfoDiv.appendChild(followersP);
	cardInfoDiv.appendChild(followingP);
  cardInfoDiv.appendChild(bioP);
  
  profileP.append(profileLink);

	return cardDiv;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
