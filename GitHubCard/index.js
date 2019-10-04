/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios 
  .get('https://api.github.com/users/Schrese')
  .then(response => {
    const myInfo = response.data;
    console.log(myInfo);
    cardCreator(myInfo);
    console.log(cardCreator(myInfo));
    cards.appendChild(cardCreator(myInfo));

    

    })


axios.get(`https://api.github.com/users/Schrese/followers`)
  .then(response => {
    const theirInfo = response.data;
    let followers = '';
    response.data.forEach(e => {
      axios.get(`https://api.github.com/users/${e.login}`)
      .then(response => {
        console.log(response);
        const myVar = response.data;
        cardCreator(myVar);
        cards.appendChild(cardCreator(myVar));

      })
      // followers += e.login;
      // console.log(e.login);
    })
    // followers.split('');
    // console.log(followers);
    // console.log(theirInfo);
    // cardCreator(theirInfo);
    // cards.appendChild(cardCreator(theirInfo));
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

const cards = document.querySelector('.cards');

function cardCreator(user) {
  const 
  card = document.createElement('div'),
  profilePic = document.createElement('img'), 
  cardInfo = document.createElement('div'), 
  realName = document.createElement('h3'),
  userName = document.createElement('p'),
  userLocation = document.createElement('p'), 
  userProfile = document.createElement('p'), 
  userFollowers = document.createElement('p'), 
  userFollowing = document.createElement('p'), 
  userBio = document.createElement('p');

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  realName.classList.add('name');
  userName.classList.add('username');

  card.appendChild(profilePic);
  card.appendChild(cardInfo);
  cardInfo.appendChild(realName);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(userProfile);
  cardInfo.appendChild(userFollowers);
  cardInfo.appendChild(userFollowing);
  cardInfo.appendChild(userBio);

  realName.textContent = user.name;
  profilePic.src = user.avatar_url;
  realName.textContent = user.name;
  userName.textContent = user.login;
  userLocation.textContent = `Location: ${user.location}`;
  userProfile.textContent = `Profile: ${user.html_url}`;
  userFollowers.textContent = `Followers: ${user.followers}`;
  userFollowing.textContent = `Following: ${user.following}`;
  userBio.textContent = `About: ${user.bio}`;

  return card;



} 

// cards.appendChild(cardCreator());


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
