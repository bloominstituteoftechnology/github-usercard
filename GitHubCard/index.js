import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

// const myData = axios.get('https://api.github.com/users/Kishkuman13');




/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

const cardsGoHere = document.querySelector('.cards');

function getUsers(name) {
  axios
    .get(`https://api.github.com/users/`+ name)
    .then((response) => {
      const thisCard = cardCreator(response.data)
      cardsGoHere.appendChild(thisCard);
    })
    .catch(err => {
      console.log('You messed up everything!');
    })
    .finally(() => {
      console.log('Complete');
    })
}
getUsers('Kishkuman13');

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

const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];

followersArray.forEach((thisGuy) => {
  axios
    .get(`https://api.github.com/users/`+ thisGuy)
    .then((response) => {
      const thisCard = cardCreator(response.data)
      cardsGoHere.appendChild(thisCard);
    })
    .catch(err => {
      console.log('You messed up everything!');
    })
    .finally(() => {
      console.log('Complete');
    })
});

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

function cardCreator(obj) {
  const newCard = document.createElement('div');
  const userImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const userName = document.createElement('h3');
  const accName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const accLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const accBio = document.createElement('p');

  userImg.src = obj.avatar_url;
  userName.textContent = obj.name;
  accName.textContent = obj.login;
  location.textContent = 'Location: ' + obj.location;
  accLink.textContent = 'Profile: ' + obj.html_url;
  followers.textContent = 'Followers: ' + obj.followers;
  following.textContent = 'Following: ' + obj.following;
  accBio.textContent = 'Bio: ' + obj.bio;

  newCard.classList.add('card');
  cardInfo.classList.add('card-info');
  userName.classList.add('name');
  accName.classList.add('username');

  newCard.appendChild(userImg);
  newCard.appendChild(cardInfo);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(accName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(accLink);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(accBio);

  return newCard;
}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
