/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

// function createCard(data) {
//   const newCard = document.createElement('div');
//   newCard.classList.add('card');

//   const newImg = document.createElement('img');
//   newImg.classList.add('card img');
//   newImg.src = response.data.avatar_url;

//   const newName = document.createElement('h3');
//   newName.classList.add('card name');
//   newName.textContent = data;
  
//   const newUserName = document.createElement('p');
//   newUserName.classList.add('card username');
//   newUserName.textContent = data;

//   const newUserLocation = document.createElement('p');
//   newUserLocation.classList.add('card p');
//   newUserLocation.textContent = data;

//   const newURL = document.createElement('a');
//   newURL.textContent = data;

//   const newFollowers = document.createElement('p');
//   newFollowers.textContent = data;

//   const newFollowing = document.createElement('p');
//   newFollowing.textContent = data;

//   const newBio = document.createElement('p');
//   newBio.textContent = data;

//   // newCard.appendChild('newImg');
//   newCard.appendChild('newName');
//   newCard.appendChild('newUserName');
//   newCard.appendChild('newUserLocation');
//   newCard.appendChild('newURL');
//   newCard.appendChild('newFollowers');
//   newCard.appendChild('newFollowing');
//   newCard.appendChild('newBio');

//   return newCard;  
// }

// const cards = document.querySelector('.cards');



axios
.get('https://api.github.com/users/banksenterprises')
  .then((response) => {       
    console.log('working', response);
    console.log('yup, workinng', response.data);
    console.log('mic check', response.data.company);
     })
  .catch((err) =>
  {
    console.log("Error: The data has not returned.", err);
  });