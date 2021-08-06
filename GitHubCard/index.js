/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

  axios.get(`https://api.github.com/users/UlfricNormcloak`)
   .then(res => {
    res.data
   })
   .catch(err => {
    console.error('Information not returned');
   })
  

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
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

const followersArray = [];
   //axios.get(`https://api.github.com/users/`


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

const allCards = document.body.querySelector('.cards');

function cardMaker ({ image, name, username, location, profile, addressLink, followers, following, bio }) {

  //instantiate elements
  const cardHolder = document.createElement('div');
  const userImage = document.createElement('img');
  const cardData = document.createElement('div');
  const nameOfUser = document.createElement('h3');
  const userHandle = document.createElement('p');
  const userLocale = document.createElement('p');
  const gitProfile = document.createElement('p');
  const gitLink = document.createElement('a');
  const gitFollowers = document.createElement('p');
  const gitFollowing = document.createElement('p');
  const gitBio = document.createElement('p');

  //classes
  cardHolder.classList.add('card');
  cardData.classList.add('card-info');
  nameOfUser.classList.add('name');
  userHandle.classList.add('username');

  //set parent/child relationships
  cardHolder.appendChild(userImage);
  cardHolder.appendChild(cardData);
  cardData.appendChild(nameOfUser);
  cardData.appendChild(userHandle);
  cardData.appendChild(userLocale);
  cardData.appendChild(gitProfile);
  gitProfile.appendChild(gitLink);
  cardData.appendChild(gitFollowers);
  cardData.appendChild(gitFollowing);
  cardData.appendChild(gitBio);

  //populating content
  userImage.setAttribute('src', '');
  nameOfUser.textContent = name;
  userHandle.textContent = username;
  userLocale.textContent = location;
  gitProfile.textContent = profile;
  gitLink.setAttribute('href', '');
  gitFollowers.textContent = followers;
  gitFollowing.textContent = following;
  gitBio.textContent = bio;

  return card
}










/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
