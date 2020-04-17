/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
let cards = document.querySelector('.cards');

axios.get('https://api.github.com/users/RyanMersmann')
  .then(response => {
  const newCard = githubCards(response);
  cards.appendChild(newCard);
  });

  console.log(axios.get('https://api.github.com/users/RyanMersmann'));


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

const followersArray = [
  `https://api.github.com/users/tetondan`,
  `https://api.github.com/users/dustinmyers`,
  `https://api.github.com/users/justsml`,
  `https://api.github.com/users/luishrd`,
  `https://api.github.com/users/bigknell`,
  `https://api.github.com/users/facebook`,
  'https://api.github.com/users/addyosmani'
];

followersArray.forEach(link =>{
  axios.get(link)
  .then(response => {
   //console.log(response);
   const newCard = githubCards(response);
   cards.appendChild(newCard);
   });
 });

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

function githubCards (obj) {

  //create the elements
  const userCard = document.createElement('div'),
        userImage = document.createElement('img'),
        cardInfo = document.createElement('div'),
        name = document.createElement('h3'),
        username = document.createElement('p'),
        userLocation = document.createElement('p'),
        userProfile = document.createElement('p'),
        profileLink = document.createElement('a'),
        userFollowers = document.createElement('p'),
        userFollowing = document.createElement('p'),
        userBio = document.createElement('p');

        
  userCard.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');

  userImage.src = obj.data['avatar_url'];
  name.textContent = obj.data.name;
  username.textContent = obj.data.login;
  location.textContent = obj.data.location;
  profileLink.href = obj.data['html_url'];
  userFollowers.textContent = obj.data.followers;
  userFollowing.textContent = obj.data.following;
  userBio.textContent = obj.data.bio;

  userCard.appendChild(userImage);
  userCard.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(userProfile);
  cardInfo.appendChild(userFollowers);
  cardInfo.appendChild(userFollowing);
  cardInfo.appendChild(userBio);
  userProfile.appendChild(profileLink);

  return userCard; 
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
