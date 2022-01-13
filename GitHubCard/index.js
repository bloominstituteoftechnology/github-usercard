import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/kfam22
*/

// const gitHubData = axios.get('https://api.github.com/users/kfam22');
// console.log('gh data:', gitHubData);
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
const entryPoint = document.querySelector('.cards');

axios.get('https://api.github.com/users/kfam22')
.then(res => {
  const myCard = ghCardMaker(res.data);
  entryPoint.appendChild(myCard);
  // console.log('test my card:', myCard); 
})
.catch(error => {
  console.error(error);
})
.finally(() => {
  console.log('card successfully added');
})

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

followersArray.forEach(follower => {
  axios.get(`https://api.github.com/users/${follower}`)
  .then(res => {
    const newCard = ghCardMaker(res.data);
    console.log('new card: ', newCard);
    entryPoint.appendChild(newCard);
  })
  .catch(error => {
    console.error(error);
  })
  .finally()
})

const ghCardMaker = ({avatar_url, name, login, location, html_url, followers, following, bio}) => {
  // create elems
  const cardCont = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardInfoCont = document.createElement('div');
  const cardTitle = document.createElement('h3');
  const username = document.createElement('p');
  const userLocation = document.createElement('p');
  const profile = document.createElement('p');
  const profileLink = document.createElement('a');
  const followCount = document.createElement('p');
  const followingCount = document.createElement('p');
  const userBio = document.createElement('p');
  // give class names/attrs
  cardCont.classList.add('card');
  cardImg.src = avatar_url;
  cardInfoCont.classList.add('card-info');
  cardTitle.classList.add('name');
  username.classList.add('username');
  profileLink.href = html_url;
  // give content
  cardTitle.textContent = name;
  username.textContent = login;
  userLocation.textContent = `Location: ${location}`;
  profile.textContent = "Profile: ";
  profileLink.textContent = html_url;
  followCount.textContent = `Followers: ${followers}`;
  followingCount.textContent = `Following: ${following}`;
  userBio.textContent = `Bio: ${bio}`;
  // create hierarchy
  cardCont.appendChild(cardImg);
  cardCont.appendChild(cardInfoCont);
  cardInfoCont.appendChild(cardTitle);
  cardInfoCont.appendChild(username);
  cardInfoCont.appendChild(userLocation);
  cardInfoCont.appendChild(profile);
  cardInfoCont.appendChild(followCount);
  cardInfoCont.appendChild(followingCount);
  cardInfoCont.appendChild(userBio);
  profile.appendChild(profileLink);
  
  return cardCont;
}



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

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
