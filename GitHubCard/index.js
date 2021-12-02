import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get(`https://api.github.com/users/Tuan147`)
.then(res => {
  const cardData = cardMaker(res.data)
})
.catch(err => {
  console.error(err)
});



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

const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
 ' luishrd',
  'bigknell',
];

followersArray.forEach(ele => {
  const newEle = axios.get(`https://api.github.com/users/${ele}`)
  .then(res => {
    const userData = res.data;
    cardMaker(newEle)
    return userData
  })
  .catch(err => {
    console.error(err)
  })
})

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

function cardMaker({ avatar_url, name, login, location, html_url, followers, following, bio }) {
  const card = document.createElement('div');
  const image = document.createElement('img');
  const cardInfo = document.createElement('div');
  const realName = document.createElement('h3');
  const userName = document.createElement('p');
  const local = document.createElement('p');
  const profile = document.createElement('p');
  const address = document.createElement('a');
  const realFollowers = document.createElement('p');
  const realFollowing = document.createElement('p');
  const realBio = document.createElement('p');


  card.appendChild(image);
  card.appendChild(cardInfo);
  card.appendChild(realName);
  card.appendChild(userName);
  card.appendChild(local);
  card.appendChild(profile);
  card.appendChild(address);
  card.appendChild(realFollowers);
  card.appendChild(realFollowing);
  card.appendChild(realBio);


  card.classList.add('card');
  cardInfo.classList.add('card-info');
  realName.classList.add('name');
  userName.classList.add('username');


  image.src = avatar_url;
  realName.textContent = `${name}`;
  userName.textContent = `${login}`;
  local.textContent = `Location: ${location}`;
  profile.textContent = `Profile: `;
  realFollowers.textContent = `Followers: ${followers}`;
  realFollowing.textContent = `Following: ${following}`;
  realBio.textContent= `Bio: ${bio}`;
  address.setAttribute('href', `${html_url}`);
  profile.appendChild(address);


  return card;
}



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
