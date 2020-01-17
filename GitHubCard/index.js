/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// axios.get('https://api.github.com/users/zpepi');

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

const userCards = document.querySelector('.cards');

axios.get('https://api.github.com/users/zpepi')
  .then((results) => {
    cardCreator(results);
    console.log(results);

    const newCard = cardCreator(results);
    userCards.appendChild(newCard);
  })
  .catch( err => {
    console.log("Error:", err);
  });

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const friendsArray = ['vrndavana',
'keyeric',
'nobro777',
'cristinaedens',
'johnkirtley'
];

friendsArray.forEach((user) => {
  const url = 'https://api.github.com/users/' + user;

  axios.get(url)
    .then((results) => {
      cardCreator(results);
    console.log(results);
    
    const newCard = cardCreator(results);
    userCards.appendChild(newCard);
  }) .catch((err) => {
  console.log('Error:', err);
  })
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

function cardCreator(user) {
  //elements
  const card = document.createElement('div');
    const img = document.createElement('img');
    const info = document.createElement('div');
    const name = document.createElement('h3');
    const username = document.createElement('p');
    const location = document.createElement('p');
    const profile = document.createElement('p');
    const address = document.createElement('a')
    const followers = document.createElement('p')
    const following = document.createElement('p');
    const bio = document.createElement('p');

//Structure
card.appendChild(img);
card.appendChild(info);
  info.appendChild(name);
  info.appendChild(username);
  info.appendChild(location);
  info.appendChild(profile);
    profile.appendChild(address);
  info.appendChild(followers);
  info.appendChild(following);
  info.appendChild(bio);

  //content
  img.src = user.data.avatar_url;
  name.textContent = user.data.name;
  username.textcontent = user.data.login;
  location.textcontent = user.data.location;
  profile.textContent = 'GitHub Link';
  address.href = user.data.html_url;
  followers.textContent = user.data.followers;
  following.textContent = user.data.following;
  bio.textContent = user.data.bio;

  //styles

  card.classList.add('card');
  img.classList.add('img');
  name.classList.add('name');
  username.classList.add('username');
  location.classList.add('p');
  profile.classList.add('p');
  followers.classList.add('p');
  following.classList.add('p');
  bio.classList.add('p');

  return card;
}


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
