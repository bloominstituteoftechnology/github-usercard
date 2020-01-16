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

const followersArray = [
  'SethC16',
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell',
];


// Function Setup
function createChild (user) {

  // Setup the createElements
  let newCard = document.createElement('div'),
      newImg = document.createElement('img'),
      newChild = document.createElement('div'),
      newName = document.createElement('h3'),
      newUser = document.createElement('p'),
      newLoc = document.createElement('p'),
      newPro = document.createElement('p'),
      newA = document.createElement('a'),
      newFol = document.createElement('p'),
      newFlg = document.createElement('p'),
      newBio = document.createElement('p');
  
  // Appended the childs    
  newCard.append(newImg);    
  newCard.append(newChild);
  newChild.append(newName);
  newChild.append(newUser);
  newChild.append(newLoc);
  newChild.append(newPro);
  
  newChild.append(newFol);
  newChild.append(newFlg);
  newChild.append(newBio);
  
  // Setup the classes
  newCard.classList.add('card');
  newChild.classList.add('card-info');
  newName.classList.add('name');
  newUser.classList.add('username')

  // Setup the textContent
  newImg.src = user.data.avatar_url;
  newName.textContent = user.data.name;
  newUser.textContent = user.data.login;
  newLoc.textContent = user.data.location;
  newPro.textContent = `Profile: `;
  newA.textContent = user.data.html_url;
  newA.setAttribute('href', user.data.html_url);
  newFol.textContent = `Followers: ${user.data.followers}`;
  newFlg.textContent = `Following: ${user.data.following}`;
  newBio.textContent = `Bio: ${user.data.bio}`;

  newPro.append(newA);

  return newCard;
}

// Pulling the parent Element
const newCard = document.querySelector('.cards')

// Follower array and forEach with API 
followersArray.forEach(user => {
  axios.get('https://api.github.com/users/' + user)
  .then( response => {
      newCard.append(createChild(response))
  })
  .catch( err => {
    console.log('Nothing to display.', err);
  })

})

// const followers = [];

// axios.get('https://github.com/SethC16/followers')
//   .then( response => {
//     response.data.forEach( user => {
//       followers.push(user.login);
//     })
//     followers.forEach( user => {
//       axios.get('https://api.github.com/users/' + user)
//       .then(response => {
//         newCard(createChild(response.data));
//       })
//       .catch( err => {
//         console.log('Nothing to display.', err);
//       })
//     })
//     .catch( err => {
//       console.log('Nothing to display.', err);
//     })
//   })
  
 