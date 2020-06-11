/* Step 1: using axios, send a GET request to the following URL 
           (replacing the placeholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios
  .get('https://api.github.com/users/melanie-mendoza')
  .then( (response) => {
    //console.log(response);
    const newCard = cardCreator(response);
    entryPoint.appendChild(newCard);
  });
  // .catch( (err) => {
  //   console.log('the data was not returned', err);
  // });


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

//entryPoint.appendChild(cardCreator);

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  'https://api.github.com/users/markanator',
  'https://api.github.com/users/Aaron-Lamb',
  'https://api.github.com/users/ClydeFrog04',
  'https://api.github.com/users/linzyk86',
  'https://api.github.com/users/robo-chick',
  'https://api.github.com/users/JessBonanno'
];

followersArray.forEach(currValue => {
  axios
    .get(currValue)
    .then(response => {
      const newCard = cardCreator(response);
      entryPoint.appendChild(newCard);
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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

function cardCreator(obj) {

// Variables
  const card = document.createElement('div');
  const image = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const userLocation = document.createElement('p');
  const userProfile = document.createElement('p');
  const userUrl = document.createElement('a');
  const followersCount = document.createElement('p');
  const followingCount = document.createElement('p');
  const userBio = document.createElement('p');

// Add ClassList
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');


// Structure Children
  card.appendChild(image);
  card.appendChild(cardInfo);

  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(userProfile);

  userProfile.appendChild(userUrl);

  cardInfo.appendChild(followersCount);
  cardInfo.appendChild(followingCount);
  cardInfo.appendChild(userBio);

// Content
  userUrl.href = obj.data.html_url;
  image.src = obj.data.avatar_url;
  name.textContent = `${obj.data.name}`;
  userName.textContent = `${obj.data.login}`;
  userLocation.textContent = `Location: ${obj.data.location}`;

  userUrl.textContent = obj.html_url;
  userProfile.textContent = `Profile: ${userUrl}`;

  followersCount.textContent = `Follower: ${obj.data.followers}`;
  followingCount.textContent = `Following: ${obj.data.following}`;
  userBio.textContent = `Bio: ${obj.data.bio}`;

  return card

}

const entryPoint = document.querySelector('.cards');
