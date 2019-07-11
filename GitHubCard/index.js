/* Step 1: using axios, send a GET request to the following URL 
           (replacing the placeholder with your Github name):
           https://api.github.com/users/<your name>
*/

const cardsDiv = document.querySelector('.cards');

axios.get(`https://api.github.com/users/dhoskins97`).then(res => {
  console.log(cardsDiv);
  const userCard = cardCreator(res.data);
  cardsDiv.appendChild(userCard);
}).catch(error => console.log(error));

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

const cardCreator = function(objParam){
  const card = document.createElement('div');
  const cardImage = document.createElement('img');
  const cardInf = document.createElement('div');
  const cardName = document.createElement('h3');
  const cardUsername = document.createElement('p');
  const cardLocation = document.createElement('p');
  const cardProfile = document.createElement('p');
  const cardLink = document.createElement('a');
  const cardFollowers = document.createElement('p');
  const cardFollowing = document.createElement('p');
  const cardBio =document.createElement('p');

  card.appendChild(cardImage);
  card.appendChild(cardInf);
  cardInf.appendChild(cardName);
  cardInf.appendChild(cardUsername);
  cardInf.appendChild(cardLocation);
  cardInf.appendChild(cardProfile);
  cardInf.appendChild(cardFollowers);
  cardInf.appendChild(cardFollowing);
  cardInf.appendChild(cardBio);
  cardProfile.appendChild(cardLink);

  card.classList.add('card');
  cardInf.classList.add('card-info');
  cardName.classList.add('name');
  cardUsername.classList.add('username');


  cardImage.src = objParam.avatar_url;
  cardName.textContent = objParam.name;
  cardUsername.textContent = objParam.login;
  cardLocation.textContent = objParam.location;
  cardLink.href = objParam.html_url;
  cardFollowers.textContent = objParam.followers;
  cardFollowing.textContent = objParam.following;

  return card;
}


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
