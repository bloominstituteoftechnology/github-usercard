/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/gdhaliwal22')
.then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
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

const followersArray = ['gdhaliwal22', 'rleslie1015', 'SGonzalez44', 'deegrams221', 'AceMouty', 'Bangstry'];

followersArray.forEach(follower => {
  axios.get('https://api.github.com/users/' + follower)
  .then((response) => {
    console.log(response);
    userCard(response.data);
  })

  
  .catch((err) => {
    console.log(err)
  })
})
//  Step 3: Create a function that accepts a single object as its only argument,
//           Using DOM methods and properties, create a component that will return the following DOM element:

function userCard(data){
  let newCard = document.createElement('div');
  newCard.classList.add('card');
  
  let newImage = document.createElement('img');
  newImage.src = data.avatar_url;

  let cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');

  let newName = document.createElement('h3');
  newName.classList.add('name');
  newName.textContent = data.name;

  let newUsername = document.createElement('p');
  newUsername.classList.add('username');
  newUsername.textContent = data.login;

  let newLocation = document.createElement('p');
  newLocation.textContent = "Location: " + data.location;

  let newProfile = document.createElement('p');
  newProfile.textContent = "Profile: " + data.html_url;

  let newFollowers = document.createElement('p');
  newFollowers.textContent = "Followers: " + data.followers;

  let newFollowing = document.createElement('p');
  newFollowing.textContent = "Following: " + data.following;

  let newBio = document.createElement('p');
  newBio.textContent = "Bio: " + data.bio;
  
  newCard.append(newImage);
  newCard.append(cardInfo);
  cardInfo.append(newName); 
  cardInfo.append(newUsername); 
  cardInfo.append(newLocation); 
  cardInfo.append(newProfile);
  cardInfo.append(newFollowers); 
  cardInfo.append(newFollowing); 
  cardInfo.append(newBio);
  
  const cards = document.querySelector('.cards');
  cards.appendChild(newCard);
  
  return newCard
}




//  <div class="card">
//   <img src={image url of user} />
//   <div class="card-info">
//     <h3 class="name">{users name}</h3>
//     <p class="username">{users user name}</p>
//     <p>Location: {users location}</p>
//     <p>Profile:  
//       <a href={address to users github page}>{address to users github page}</a>
//     </p>
//     <p>Followers: {users followers count}</p>
//     <p>Following: {users following count}</p>
//     <p>Bio: {users bio}</p>
//   </div>
// </div>



//  List of LS Instructors Github username's: 
//   tetondan
//   dustinmyers
//   justsml
//   luishrd
//   bigknell 

