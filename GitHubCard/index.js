

/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

  axios
  .get('https://api.github.com/users/mimilambda')
  .then(response => {
    console.log(response);
    cardPoint.append(userCard(response.data));
  })
  .catch(error => {
    console.log("the data was not returned", error);
  });

  function gitCards(data) {
    function checkIfNull(str) {
      if (str) return str;
      return '';
    }
    const newCard = document.createElement('div'),
      newImg = document.createElement('img'),
      newCardInfo = document.createElement('div'),
      name = document.createElement('h3'),
      username = document.createElement('p'),
      location = document.createElement('p'),
      profile = document.createElement('p'),
      profileUrl = document.createElement('a'),
      followers = document.createElement('p'),
      following = document.createElement('p'),
      bio = document.createElement('p');
  
    //setting content
    newImg.src = data.avatar_url;
    name.textContent = data.name;
    username.textContent = data.login;
    location.textContent = `Location: ${checkIfNull(data.location)}`;
    profile.textContent = `Profile: ${checkIfNull(data.name)}`;
    profileUrl.textContent = `Link: ${data.html_url}`;
    followers.textContent = `Followers: ${checkIfNull(data.followers)}`;
    following.textContent = `Following: ${checkIfNull(data.following)}`;
    bio.textContent = `Bio: ${checkIfNull(data.bio)}`;
  
    //Create Structure and append to the DOM
  
    newCard.appendChild(newImg);
    newCard.appendChild(newCardInfo);
    newCardInfo.appendChild(name);
    newCardInfo.appendChild(username);
    newCardInfo.appendChild(location);
    newCardInfo.appendChild(profile);
    newCardInfo.appendChild(followers);
    newCardInfo.appendChild(following);
    newCardInfo.appendChild(bio);
    newCardInfo.appendChild(profileUrl);
  
    //applying styles and classes
  
    newCard.classList.add('card');
    newCardInfo.classList.add('card-info');
    name.classList.add('name');
    username.classList.add('username');
  
    // event handlers
  
    return newCard;
  }
  // setup the Array
  
  const entryPoint = document.querySelector('.cards');
  
  // this is my gitCard
  
  const cards = document.querySelector('.cards');
  
  axios.get('https://api.github.com/users/mimilambda').then(response => {
    console.log(response.data);
    cards.appendChild(gitCards(response.data));
  });
  
  // this is follower git Card they gave us changed with my own followers
  
  const followersArray = [
    'easyas123l1',
    'lflores0214',
    'AnniqueN',
    'Chrismis79',
    'JeanFraga'
  ];
  
  followersArray.forEach(follower => {
    axios.get(`https://api.github.com/users/${follower}`)
      .then(response => {
        console.log(response);
        cards.append(gitCards(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  });
  
  
  
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

