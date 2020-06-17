/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/adduece')
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  })


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

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

const newCard = document.querySelector('.cards');

function myCard(obj) {

  //card div 
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');

  //img
  const image = document.createElement('img');
  image.src = obj.avatar_url;
  cardDiv.appendChild(image);

  //Card info Div
  const cardInfoDiv = document.createElement('div');
  cardInfoDiv.classList.add('card-info');
  cardDiv.appendChild(cardInfoDiv);

  // Name of user
  const nameInfo = document.createElement('h3');
  nameInfo.classList.add('name');
  nameInfo.textContent = obj.name;
  cardInfoDiv.appendChild(nameInfo);

  //username of user  
  const userNameInfo = document.createElement('p');
  userNameInfo.classList.add('username');
  userNameInfo.textContent = obj.login;
  cardInfoDiv.appendChild(userNameInfo);

  //user location
  const location = document.createElement('p');
  location.textContent = `Location: ${obj.location}`;
  cardInfoDiv.appendChild(location);

  //Profile header
  const profile = document.createElement('p');
  profile.textContent = 'Profile: ';
  cardInfoDiv.appendChild(profile);

  //Profile URL
  const profileURL = document.createElement('a');
  profileURL.href = obj.url;
  profileURL.textContent = obj.url;
  profile.appendChild(profileURL);

  //Followers
  const followersInfo = document.createElement('p');
  followersInfo.textContent = `Followers: ${obj.followers}`;
  cardInfoDiv.appendChild(followersInfo);

  //Following
  const followingInfo = document.createElement('p');
  followingInfo.textContent = `Following: ${obj.following}`;
  cardInfoDiv.appendChild(followingInfo);

  //Users Bio info
  const usersBio = document.createElement('p');
  usersBio.textContent = `Bio: ${obj.bio}`;
  cardInfoDiv.appendChild(usersBio);

  newCard.appendChild(cardDiv);

  return newCard;

}

followersArray.forEach(follow => {
  axios.get(`https://api.github.com/users/${follow}`)
       .then(response => myCard(response.data))
       .catch(err => console.log(err.message))
})

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
