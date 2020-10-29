/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios';

axios
  .get('https://api.github.com/users/lizapincsak')
  .then((futureData)=> {
    // const gitInfo = futureData.data;
    entryPoint.appendChild(cardMaker(futureData));
  })
  .catch((err)=>{
    console.log(err, `this isn't working`);
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
const entryPoint = document.querySelector('.cards');
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
  'bigknell'];


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

function cardMaker(obj){
  const card = document.createElement('div');
  const image = document.createElement('img');
  const cardInfo = document.createElement('div');
  const title = document.createElement('h3');
  const username = document.createElement('p');
  const userLocation = document.createElement('p');
  const profile = document.createElement('p');
  const address = document.createElement('a');//'a'??
  const userFollowers = document.createElement('p');
  const userFollowing = document.createElement('p');
  const userBio = document.createElement('p');

  image.src = `${obj.imageURL}`;
  title.textContent = `${name.imageURL}`;
  username.textContent = `${obj.username}`;
  userLocation.textContent = `${obj.userLocation}`;
  address.textContent = `Profile: ${obj.html_url}`
  userFollowers.textContent = `${obj.userFollowers}`;
  userFollowing.textContent = `${obj.userFollowing}`;
  userBio.textContent = `${obj.bio}`;

  card.classList.add('class');
  cardInfo.classList.add('card-info');
  title.classList.add('name');
  username.classList.add('username');

  card.appendChild(image);
  cardInfo.appendChild(title);
  cardInfo.appendChild(username);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(profile);
  profile.appendChild(address);
  cardInfo.appendChild(userFollowers);
  cardInfo.appendChild(userFollowing);
  cardInfo.appendChild(userBio);

  return card;
}

// axios 
//   .get(`https://api.github.com/users/bigknell`)
//   .then((res) => {
//     const githubCardData = res.data.data;
//     githubCardData.forEach((item)=>{
//       const 
//     })
//     // const addCard = github(githubCardData);
//     entryPoint.appendChild(addCard);
//   })
//   .catch()


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
